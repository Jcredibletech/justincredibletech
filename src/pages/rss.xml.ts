import rss from '@astrojs/rss';
import { getPosts } from '../utils/posts';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import type { APIContext } from 'astro';
import { withBase } from '../utils/paths';

export async function GET(context: APIContext) {
  const posts = (await getPosts()).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: withBase(`blog/${post.id}/`),
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
