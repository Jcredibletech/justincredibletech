// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Two build targets from the same source:
//  - Vercel (official site): https://justincredibletech.com at the root.
//  - GitHub Pages mirror (legacy): https://jcredibletech.github.io/justincredibletech
//    (kept so old links + TikTok video URLs keep working; its pages point/redirect to the official domain).
const onVercel = !!process.env.VERCEL || process.env.SITE_TARGET === 'vercel';
const BASE = onVercel ? '/' : '/justincredibletech';

// ---- SEO: sitemap <lastmod> from each article's updatedDate/pubDate frontmatter ----
const BLOG_DIR = path.resolve('src/content/blog');
/** @type {Map<string, {date: Date, section: string}>} */
const postDates = new Map();
for (const f of fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR) : []) {
  if (!/\.mdx?$/.test(f)) continue;
  const fm = fs.readFileSync(path.join(BLOG_DIR, f), 'utf8').split(/^---\s*$/m)[1] ?? '';
  if (/^draft:\s*true/m.test(fm)) continue;
  const get = (/** @type {string} */ k) => fm.match(new RegExp(`^${k}:\\s*["']?([^"'\\n#]+)`, 'm'))?.[1]?.trim();
  const d = new Date(get('updatedDate') ?? get('pubDate') ?? '');
  if (!isNaN(d.valueOf())) postDates.set(f.replace(/\.mdx?$/, ''), { date: d, section: get('section') ?? get('category') ?? 'tech' });
}
const newest = (/** @type {string|undefined} */ sec) => {
  let best;
  for (const { date, section } of postDates.values()) if ((!sec || section === sec) && (!best || date > best)) best = date;
  return best;
};

// ---- Performance: copy responsive WebP variants (made by src/utils/seo.ts) into dist/_img,
// shrink video poster PNGs to WebP, and (official build only) drop the legacy /justincredibletech/
// prefix from links so they don't go through a redirect. Never touches public/. Any failure is
// logged and skipped; the original files keep working.
/** @returns {import('astro').AstroIntegration} */
function jctImages() {
  return {
    name: 'jct-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const imgOut = path.join(out, '_img');
        fs.mkdirSync(imgOut, { recursive: true });
        const cache = path.resolve('node_modules/.cache/jct-img');
        let copied = 0;
        if (fs.existsSync(cache)) for (const f of fs.readdirSync(cache)) { fs.copyFileSync(path.join(cache, f), path.join(imgOut, f)); copied++; }
        let sharp;
        try { sharp = (await import('sharp')).default; } catch { logger.warn('sharp unavailable; posters left as-is'); }
        const posters = new Map();
        const walk = (/** @type {string} */ d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? (e.name === 'videos' || e.name === '_img' ? [] : walk(path.join(d, e.name))) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []);
        let rewritten = 0;
        for (const file of walk(out)) {
          let html = fs.readFileSync(file, 'utf8');
          const before = html;
          if (onVercel) html = html.replace(/((?:href|src|poster)=")\/justincredibletech\//g, '$1/');
          if (sharp) {
            const re = /poster="((?:\/justincredibletech)?\/videos\/([^"/]+)\.png)"/g;
            for (const m of [...html.matchAll(re)]) {
              const [, src, name] = m;
              if (!posters.has(name)) {
                const from = path.join(out, 'videos', `${name}.png`);
                const target = `poster-${name}-720.webp`;
                try {
                  if (!fs.existsSync(from)) throw new Error('missing');
                  const cached = path.join(cache, target);
                  if (!fs.existsSync(cached) || fs.statSync(cached).mtimeMs < fs.statSync(from).mtimeMs) {
                    fs.mkdirSync(cache, { recursive: true });
                    await sharp(from).resize({ width: 720, withoutEnlargement: true }).webp({ quality: 75 }).toFile(cached);
                  }
                  fs.copyFileSync(cached, path.join(imgOut, target));
                  posters.set(name, `${BASE.replace(/\/$/, '')}/_img/${target}`);
                } catch { posters.set(name, null); }
              }
              const to = posters.get(name);
              if (to) html = html.split(`poster="${src}"`).join(`poster="${to}"`);
            }
          }
          if (html !== before) { fs.writeFileSync(file, html); rewritten++; }
        }
        logger.info(`${copied} image variants, ${[...posters.values()].filter(Boolean).length} posters, ${rewritten} pages updated`);
      },
    },
  };
}

export default defineConfig({
  site: onVercel ? 'https://justincredibletech.com' : 'https://jcredibletech.github.io',
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/category/') && !page.includes('/404'),
      serialize(item) {
        const u = new URL(item.url);
        const p = u.pathname.replace(/^\/justincredibletech/, '');
        const post = p.match(/^\/blog\/([^/]+)\/?$/)?.[1];
        let d;
        if (post) d = postDates.get(post)?.date;
        else if (p === '/' || p === '/blog/') d = newest();
        else { const sec = p.match(/^\/([a-z]+)\/$/)?.[1]; if (sec) d = newest(sec); }
        if (d) item.lastmod = d.toISOString();
        return item;
      },
    }),
    jctImages(),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
