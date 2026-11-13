import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, SECTIONS, postsInSection, type Section } from '../../utils/posts';
import { withBase } from '../../utils/paths';

export function getStaticPaths() {
  return SECTIONS.map((s) => ({ params: { section: s.slug }, props: { s } }));
}

export async function GET(context: APIContext) {
  const s = context.props.s as Section;
  const posts = postsInSection(await getPosts(), s.slug);
  return rss({
    title: s.name,
    description: s.blurb,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: withBase(`blog/${post.id}/`),
      categories: [s.name, ...post.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}
