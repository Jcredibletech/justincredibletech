import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import { withBase } from './paths';

export type Post = CollectionEntry<'blog'>;

export const SECTION_SLUGS = ['tech', 'auto', 'space', 'ev', 'science', 'politics'] as const;
export type SectionSlug = (typeof SECTION_SLUGS)[number];

export interface Section {
  slug: SectionSlug;
  /** Full network brand name, e.g. "JC EV". */
  name: string;
  /** Short label used after the JC chip in badges and the nav, e.g. "EV". */
  short: string;
  blurb: string;
  /** Accent for light backgrounds (also used in inline/OG contexts). Theme-aware value is var(--sec) via the .sec-<slug> class. */
  color: string;
  /** Accent for dark backgrounds. */
  colorDark: string;
}

/**
 * The JustinCredible network. Order = nav order. Colors are also defined as CSS tokens
 * (--c-<slug>) in src/styles/global.css; keep both in sync (see NETWORK.md).
 */
export const SECTIONS: Section[] = [
  { slug: 'tech', name: 'JustinCredible Tech', short: 'Tech', color: '#8a6a0c', colorDark: '#d8b03a',
    blurb: 'Phones, computers, AI, apps and the companies behind them.' },
  { slug: 'auto', name: 'JC Auto', short: 'Auto', color: '#c8102e', colorDark: '#ff5c63',
    blurb: 'Cars, trucks, motorsport and the wider world of transportation.' },
  { slug: 'space', name: 'JC Space', short: 'Space', color: '#4338ca', colorDark: '#9b9cff',
    blurb: 'Rockets, launches, satellites and missions beyond Earth.' },
  { slug: 'ev', name: 'JC EV', short: 'EV', color: '#0e7490', colorDark: '#22d3ee',
    blurb: 'Electric vehicles, charging, batteries and self-driving tech.' },
  { slug: 'science', name: 'JC Science', short: 'Science', color: '#15803d', colorDark: '#4ade80',
    blurb: 'Discoveries, health and research, explained without the jargon.' },
  { slug: 'politics', name: 'JC Politics', short: 'Politics', color: '#7a3e8e', colorDark: '#c99ae0',
    blurb: 'Policy, government and elections, reported factually and without taking sides.' },
];

/** Pre-network `category:` values (and old /category/<slug>/ URLs) mapped to network sections. */
export const LEGACY_SECTION: Record<string, SectionSlug> = {
  tech: 'tech', ai: 'tech', news: 'tech', cars: 'auto', auto: 'auto', ev: 'ev', evs: 'ev',
  space: 'space', science: 'science', health: 'science', politics: 'politics',
};

export function getSection(slug: string): Section {
  return SECTIONS.find((s) => s.slug === slug) ?? SECTIONS[0];
}

/** A post's section: frontmatter `section`, else legacy `category`, else Tech. */
export function sectionFor(post: Post): Section {
  if (post.data.section) return getSection(post.data.section);
  const legacy = post.data.category ? LEGACY_SECTION[post.data.category.toLowerCase()] : undefined;
  return getSection(legacy ?? 'tech');
}

export function postsInSection(posts: Post[], slug: string): Post[] {
  return posts.filter((p) => sectionFor(p).slug === slug);
}

export function sectionUrl(slug: string): string {
  return withBase(`${slug}/`);
}

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

const PUBLIC = path.resolve('public');
/** Returns a base-aware URL for the post's lead image, or undefined if none. */
export function imageFor(post: Post): string | undefined {
  const img = post.data.image ?? `/images/${post.id}.jpg`;
  if (/^https?:\/\//.test(img)) return img;
  return fs.existsSync(path.join(PUBLIC, img.replace(/^\/+/, ''))) ? withBase(img) : undefined;
}

export function postUrl(post: Post): string {
  return withBase(`blog/${post.id}/`);
}

export function formatDate(d: Date, style: 'long' | 'short' = 'long'): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric', month: style === 'long' ? 'long' : 'short', day: 'numeric', timeZone: 'UTC',
  });
}

export function relatedPosts(post: Post, all: Post[], n = 4): Post[] {
  const tags = new Set(post.data.tags.map((t) => t.toLowerCase()));
  const sec = sectionFor(post).slug;
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => ({
      p,
      score: p.data.tags.filter((t) => tags.has(t.toLowerCase())).length * 2 + (sectionFor(p).slug === sec ? 3 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.p.data.pubDate.valueOf() - a.p.data.pubDate.valueOf())
    .slice(0, n)
    .map((x) => x.p);
}
