# SEO rules for JustinCredibleTech articles

Every daily network article and Pulse post follows these rules. They sit on top of `NETWORK.md`
(sections, photos, neutrality) and never override it. The site templates already handle canonical URLs,
sitemap, robots, Open Graph/Twitter cards, JSON-LD (NewsArticle, BreadcrumbList, Organization, WebSite,
VideoObject), responsive images and meta-description trimming. Do not edit templates for a single article.

## Titles (`title:`)
1. Say what happened, plainly: **who + did what + key detail**. Example: "Senate Passes Permitting Bill 62-33".
2. Aim for **50–70 characters**; hard ceiling ~90. Google cuts the rest. Put the most-searched name first
   (company, product, person, place), not "Here's why…" or "You won't believe…".
3. No clickbait, no questions the story doesn't answer, no loaded labels, no ALL CAPS, no emoji.
   Attribute claims ("…, Report Says", "…, Company Says"). Label rumors as rumors.
4. Follow-up stories start with `Update: ` and still name the subject ("Update: Nvidia Reinstates Jensen Huang as CEO").
5. Never use "JC" for JustinCredible. Never mention McBroom or GM Financial.

## Descriptions (`description:`)
1. **One sentence, 120–155 characters**, that stands alone in a search result: what, who, when (with the date).
2. Must add something the title doesn't (number, date, next step). No "In this article…".
3. Longer decks are trimmed automatically at a sentence/word boundary for the meta tag, so put the key fact first.

## Slugs (file name)
1. Lowercase, hyphenated, **3–7 words**, the main keywords only: `nvidia-reinstates-jensen-huang-ceo`.
2. Drop dates, stop words and "breaking". Never rename or move a published slug (links, Reels, TikTok depend on it).
3. Follow-ups use `update-<original-or-new-keywords>`.

## Body structure
1. First paragraph answers who/what/when/where in 2–3 sentences (this is what Google and AI answers quote).
2. Use `##` subheadings (never a second `#`/H1; the title is the only H1). Good patterns: "What happened",
   "Why it matters", "What's next", "Key numbers".
3. 400+ words when the facts support it; no padding. Cite primary sources with outbound links.
4. Every photo: `imageAlt` describes what is in the picture (not the headline); `imageCredit` filled.
   Lead image about 1600px wide JPEG, under ~400 KB (the build makes WebP sizes automatically).

## Internal links (most important habit)
1. Link **2–4 earlier JustinCredibleTech articles** in the body with descriptive anchor text
   (`[Nvidia's board rejected Huang's return on Nov 17](/blog/nvidia-board-rejects-huang-return-earnings/)`),
   never "click here". Use root-relative `/blog/<slug>/` (no `/justincredibletech/` prefix).
2. Follow-ups open with: `*This is an update to our <Month D> story, [Title](/blog/<slug>/).*`
   Keep that exact wording: the original article then shows a "Follow-up:" link automatically.
3. When a topic recurs (3+ stories), link the newest explainer or the section page (`/ai/`, `/ev/` …).

## Tags
1. 3–6 tags: the main entities (company, product, person, place) + one topic. Reuse existing tag spellings
   (`rg -o 'tags: .*' src/content/blog | sort | uniq -c`) so related-story matching works.

## Evergreen explainers (1–2 per week, any section)
1. Pick topics we keep covering (e.g. "What is IndexNow", "How Tesla FSD versions work", "How Starship launches work",
   "What zero-data-retention means for AI"). Title as the question or "Explained:" plus the subject, slug without a date.
2. Keep them updated: when facts change, edit the article and set `updatedDate:`; don't publish a duplicate.
3. Link new news stories to the explainer, and the explainer to the 3–5 best news stories.

## Duplicates
1. One article per event. A genuinely new development is an `update-` post linked to the original (above).
   Small corrections go into the original with `updatedDate:`; never re-publish the same story under a new slug.

## After deploy
1. Vercel deploy is live → run `node scripts/indexnow.mjs` (pings Bing/IndexNow engines for the changed articles).
   Google picks up new URLs from the sitemap (`/sitemap-index.xml`, with `lastmod`) via Search Console.
