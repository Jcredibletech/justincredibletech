// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Two build targets from the same source:
//  - Vercel (official site): https://justincredibletech.com at the root.
//  - GitHub Pages mirror (legacy): https://jcredibletech.github.io/justincredibletech
//    (kept so old links + TikTok video URLs keep working; its pages point/redirect to the official domain).
const onVercel = !!process.env.VERCEL || process.env.SITE_TARGET === 'vercel';

export default defineConfig({
  site: onVercel ? 'https://justincredibletech.com' : 'https://jcredibletech.github.io',
  base: onVercel ? '/' : '/justincredibletech',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
