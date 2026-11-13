import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Optional extras (all backward compatible):
    // section: which JustinCredible network section the article belongs to (see NETWORK.md).
    // Omitted = Tech (or the legacy `category` mapping below), so older posts never break.
    section: z.enum(['tech', 'auto', 'space', 'ev', 'science', 'politics']).optional(),
    // Deprecated pre-network field; still read as a fallback when `section` is missing.
    category: z.string().optional(),
    // image: site-relative path, e.g. "/images/my-slug.jpg". If omitted, public/images/<slug>.jpg is used when present.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
  }),
});

export const collections = { blog };
