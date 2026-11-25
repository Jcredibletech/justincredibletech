#!/usr/bin/env node
// IndexNow ping (Bing, Yandex, Seznam, Naver and other IndexNow engines; Google does not use IndexNow).
// No account needed: the key file public/6562faef35330e9be280bb8dcb56ef0e.txt proves we own the site.
// Usage (after the Vercel deploy is live):
//   node scripts/indexnow.mjs                      # pings every URL changed in the last commit (articles + home + /blog/)
//   node scripts/indexnow.mjs <slug|url> [...]     # pings specific article slugs or full URLs
//   node scripts/indexnow.mjs --all                # pings every URL in the live sitemap (use sparingly)
import { execSync } from 'node:child_process';
const KEY = '6562faef35330e9be280bb8dcb56ef0e';
const HOST = 'justincredibletech.com';
const ORIGIN = `https://${HOST}`;
const args = process.argv.slice(2);
let urls = [];
if (args[0] === '--all') {
  const xml = await (await fetch(`${ORIGIN}/sitemap-0.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} else if (args.length) {
  urls = args.map((a) => (a.startsWith('http') ? a : `${ORIGIN}/blog/${a.replace(/^\/?(blog\/)?|\/$/g, '')}/`));
} else {
  const changed = execSync('git diff --name-only HEAD~1 HEAD -- src/content/blog', { encoding: 'utf8' }).split('\n').filter(Boolean);
  const slugs = changed.map((f) => f.replace(/^src\/content\/blog\//, '').replace(/\.mdx?$/, ''));
  urls = slugs.map((s) => `${ORIGIN}/blog/${s}/`);
  if (urls.length) urls.push(`${ORIGIN}/`, `${ORIGIN}/blog/`);
}
urls = [...new Set(urls)];
if (!urls.length) { console.log('IndexNow: nothing to submit'); process.exit(0); }
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: HTTP ${res.status} for ${urls.length} URL(s)`);
if (res.status >= 400) { console.log(await res.text()); process.exit(1); }
