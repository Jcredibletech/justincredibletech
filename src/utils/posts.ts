import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import { withBase } from './paths';

export type Post = CollectionEntry<'blog'>;

export interface Section {
  slug: string;
  name: string;
  blurb: string;
  color: string;
  match: string[];
}

/** Order matters: first match wins when picking a post's primary section. */
export const SECTIONS: Section[] = [
  { slug: 'health', name: 'Health', blurb: 'Medical breakthroughs, approvals and research that could change care.', color: '#e0475b',
    match: ['health', 'medicine', 'medical breakthroughs', 'fda', 'mrna', 'cancer', 'moderna', 'aging'] },
  { slug: 'cars', name: 'Cars & EVs', blurb: 'Electric vehicles, self-driving, robotaxis and the cars worth knowing about.', color: '#1fa971',
    match: ['ev', 'cars', 'tesla', 'cybertruck', 'byd', 'mercedes-amg', 'fsd', 'robotaxi', 'cybercab', 'self-driving', 'roadster', 'affordable evs', 'sports cars', 'autopilot'] },
  { slug: 'space', name: 'Space', blurb: 'Rockets, launches, satellites and missions.', color: '#5b6cff',
    match: ['space', 'spacex', 'starship', 'nasa', 'falcon 9', 'starlink', 'rockets', 'moon', 'super heavy', 'starbase'] },
  { slug: 'science', name: 'Science', blurb: 'Discoveries and research, explained without the jargon.', color: '#a259ff',
    match: ['science', 'research', 'math'] },
  { slug: 'ai', name: 'AI', blurb: 'Models, labs and the AI tools showing up in everyday products.', color: '#f08a24',
    match: ['ai', 'openai', 'anthropic', 'xai', 'gemini'] },
  { slug: 'tech', name: 'Tech', blurb: 'Phones, computers, apps and the companies behind them.', color: '#c9a227',
    match: ['tech', 'apple', 'google', 'microsoft', 'iphone', 'mac', 'apps', 'gadgets', 'consumer tech', 'foldables', 'foldable', 'discord', 'privacy', 'connectivity', 'security'] },
  { slug: 'news', name: 'News', blurb: 'Non-political breaking news.', color: '#8a8f98',
    match: ['news', 'breaking news'] },
];

export function sectionFor(post: Post): Section {
  if (post.data.category) {
    const s = SECTIONS.find((x) => x.slug === post.data.category!.toLowerCase() || x.name.toLowerCase() === post.data.category!.toLowerCase());
    if (s) return s;
  }
  const tags = post.data.tags.map((t) => t.toLowerCase());
  for (const s of SECTIONS) if (tags.some((t) => s.match.includes(t))) return s;
  return SECTIONS[SECTIONS.length - 1];
}

export function postsInSection(posts: Post[], slug: string): Post[] {
  return posts.filter((p) => sectionFor(p).slug === slug);
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
