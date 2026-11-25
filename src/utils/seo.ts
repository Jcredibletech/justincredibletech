// Shared SEO helpers: meta description trimming, structured data (JSON-LD) nodes,
// and responsive image variants. Used by BaseHead, BlogPost, section pages and Cover.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { withBase } from './paths';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_AUTHOR, SOCIALS, CANONICAL_ORIGIN } from '../consts';

/** Meta descriptions: Google shows about 150–160 characters. Trim long decks at a word boundary. */
export function metaDescription(desc: string, max = 158): string {
  const d = desc.replace(/\s+/g, ' ').trim();
  if (d.length <= max) return d;
  // Longest run of whole sentences that fits (skips abbreviations such as "U.S." or "Dr.").
  let best = '';
  for (const m of d.matchAll(/[.!?](?=\s+["'(A-Z0-9])/g)) {
    const end = m.index! + 1;
    if (end > max) break;
    const head = d.slice(0, end);
    if (/(?:\b[A-Z]|\b(?:Mr|Mrs|Ms|Dr|St|Jr|Sr|Inc|Co|Corp|vs|No|Gov|Sen|Rep|Gen|Lt|Ft|Mt))\.$/.test(head)) continue;
    best = head;
  }
  if (best.length >= 70) return best;
  const cut = d.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:–—-]+$/, '') + '…';
}

/** <title>: keep the brand suffix only when it fits in roughly 65 characters. */
export function pageTitle(title: string | undefined, fallback: string): string {
  if (!title) return fallback;
  const withBrand = `${title} | ${SITE_TITLE}`;
  return withBrand.length <= 65 ? withBrand : title;
}

export const ORG_ID = `${CANONICAL_ORIGIN}/#organization`;
export const SITE_ID = `${CANONICAL_ORIGIN}/#website`;
export const AUTHOR_ID = `${CANONICAL_ORIGIN}/#justin`;

export const organizationNode = {
  '@type': 'NewsMediaOrganization',
  '@id': ORG_ID,
  name: SITE_TITLE,
  url: `${CANONICAL_ORIGIN}/`,
  logo: { '@type': 'ImageObject', url: `${CANONICAL_ORIGIN}/android-chrome-512.png`, width: 512, height: 512 },
  sameAs: SOCIALS.map((s) => s.url),
};
export const websiteNode = {
  '@type': 'WebSite', '@id': SITE_ID, name: SITE_TITLE, url: `${CANONICAL_ORIGIN}/`,
  description: SITE_DESCRIPTION, inLanguage: 'en-US', publisher: { '@id': ORG_ID },
};
export const authorNode = {
  '@type': 'Person', '@id': AUTHOR_ID, name: SITE_AUTHOR, url: `${CANONICAL_ORIGIN}/about/`,
  sameAs: SOCIALS.map((s) => s.url), worksFor: { '@id': ORG_ID },
};

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}

const PUBLIC = path.resolve('public');
const CACHE = path.resolve('node_modules/.cache/jct-img');
const sizeCache = new Map<string, { width: number; height: number } | undefined>();

/** Strip the base (/justincredibletech) and return the file under public/, if it exists. */
function publicFile(src: string): string | undefined {
  const rel = src.replace(/^https?:\/\/[^/]+/, '').replace(/^\/justincredibletech(?=\/)/, '').replace(/^\/+/, '');
  const f = path.join(PUBLIC, decodeURIComponent(rel));
  return fs.existsSync(f) ? f : undefined;
}

export async function imageSize(src: string): Promise<{ width: number; height: number } | undefined> {
  if (sizeCache.has(src)) return sizeCache.get(src);
  let out: { width: number; height: number } | undefined;
  try {
    const f = publicFile(src);
    if (f) {
      const m = await sharp(f).metadata();
      if (m.width && m.height) out = { width: m.width, height: m.height };
    }
  } catch { out = undefined; }
  sizeCache.set(src, out);
  return out;
}

export const VARIANT_WIDTHS = [480, 960];

/**
 * Responsive WebP variants for an image in public/. Files are written to node_modules/.cache/jct-img
 * and copied into dist/_img/ by the `jct-images` integration in astro.config.mjs.
 * Returns undefined (so callers fall back to the original file) if anything fails.
 */
export async function responsiveImage(src: string): Promise<{ srcset: string; width: number; height: number } | undefined> {
  try {
    const f = publicFile(src);
    const dims = await imageSize(src);
    if (!f || !dims) return undefined;
    const stat = fs.statSync(f);
    const key = crypto.createHash('sha1').update(`${f}:${stat.size}:${stat.mtimeMs}`).digest('hex').slice(0, 10);
    const name = path.basename(f).replace(/\.[^.]+$/, '');
    fs.mkdirSync(CACHE, { recursive: true });
    const parts: string[] = [];
    for (const w of VARIANT_WIDTHS) {
      if (w >= dims.width) continue;
      const file = `${name}-${key}-${w}.webp`;
      const out = path.join(CACHE, file);
      if (!fs.existsSync(out)) await sharp(f).resize({ width: w }).webp({ quality: 72 }).toFile(out);
      parts.push(`${withBase(`_img/${file}`)} ${w}w`);
    }
    if (!parts.length) return undefined;
    parts.push(`${src} ${dims.width}w`);
    return { srcset: parts.join(', '), ...dims };
  } catch {
    return undefined;
  }
}
