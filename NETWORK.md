# The JustinCredible network: authoring guide

justincredibletech.com is one Astro site with eight sections. They all share the master brand (the octagonal
badge monogram, Inter type, header lockup, layout); each section has its own accent color. Daily article runs follow this file.
Never shorten JustinCredible to "JC" in site-facing text; section names are always "JustinCredible <Section>".

## Sections

| Section | `section:` value | Landing page | Section RSS | Text on white | Text on dark | Tag / bar fill |
|---|---|---|---|---|---|---|
| JustinCredible Tech | `tech` | `/tech/` | `/tech/rss.xml` | `#8a6a0c` | `#d8b03a` | `#e0b020` gold |
| JustinCredible AI | `ai` | `/ai/` | `/ai/rss.xml` | `#1d4ed8` | `#60a5fa` | `#2563eb` |
| JustinCredible Auto | `auto` | `/auto/` | `/auto/rss.xml` | `#c8102e` | `#ff5c63` | `#e11d2e` |
| JustinCredible Space | `space` | `/space/` | `/space/rss.xml` | `#4338ca` | `#9b9cff` | `#6d28d9` violet |
| JustinCredible EV | `ev` | `/ev/` | `/ev/rss.xml` | `#0e7490` | `#22d3ee` | `#06b6d4` |
| JustinCredible Science | `science` | `/science/` | `/science/rss.xml` | `#15803d` | `#4ade80` | `#15803d` |
| JustinCredible Health | `health` | `/health/` | `/health/rss.xml` | `#c2410c` | `#f97316` | `#ea580c` orange |
| JustinCredible Politics | `politics` | `/politics/` | `/politics/rss.xml` | `#7a3e8e` | `#c99ae0` | `#a21caf` |

Text accents (`color` / `colorDark`, and the `--c-<slug>` tokens) stay AA-compliant: at least 5:1 on
white and 6:1 on the dark theme background. `colorTag` is the vibrant fill for the lockup tag, the
section dropdown, and the homepage 8-color bar — not for small body text. Keep `SECTIONS` in
`src/utils/posts.ts` and `--c-<slug>` in `src/styles/global.css` in sync. The `.sec-<slug>` class
sets `--sec` to the theme-aware text accent.

The header logo is the shared `src/components/SectionLockup.astro` component (badge monogram + stacked
JUSTIN / CREDIBLE wordmark + a slanted section-name tag). The tag is a dropdown of the other sections.
On the homepage the tag reads TECH (the main brand). Adding a section to `SECTIONS` automatically
gives it the same lockup, colored with that section's `colorTag`. Do not put "JC" in the tag or
any other visible label; the monogram graphic is the only place the JC mark appears.
Do not list every "JustinCredible <Section>" name in site-facing prose; use the short topic list
("tech, AI, autos, space, EVs, science, health and politics").

What goes where:
- **tech**: consumer tech, phones, computers, apps, chips, big tech business, gaming, gadgets, outages.
  Hardware, software and company news that is not primarily an AI or health story.
- **ai**: AI models, AI companies, tools, agents, chatbots, AI policy and AI research.
  Avoid overlap with Tech, which keeps hardware, software, gadgets, outages, and chips/business
  (including Nvidia corporate and stock stories that are not mainly about an AI product).
- **auto**: cars and trucks that are not primarily EV stories, motorsport, auto industry, transportation (trains, planes, crashes).
- **space**: rockets, launches, SpaceX/Starship/Starlink, NASA, satellites, missions.
- **ev**: electric vehicles, Tesla, charging, batteries, home energy, self-driving and robotaxis.
- **science**: research, discoveries, archaeology, math, physics, climate, biology and the natural world.
  Health and medical stories belong in Health, not Science.
- **health**: health, medicine, FDA and drug approvals, vaccines, nutrition and fitness research,
  health policy and insurance costs.
- **politics**: policy, government, Congress, regulation fights, elections. Coverage stays factual and as
  neutral as possible: report what happened, who said what (each side in its own words, attributed),
  and what comes next. No loaded labels and no partisan framing in headlines. When a story must lean,
  it leans right. Use politics only when the government/policy angle *is* the story;
  a company story with a regulatory footnote stays in its own section.

Pick exactly one section per article. If unsure between two, pick the one a reader would browse to find it.

## URLs (do not change)

Every article lives at `/blog/<slug>/` no matter its section. Blog embeds, Instagram Reels, TikTok and X posts
link there, so never rename a slug or move a file after publishing. Section pages only list articles.
Old `/category/<name>/` URLs redirect to the new section pages.

## New article

Create `src/content/blog/<slug>.md` (lowercase, hyphenated slug):

```markdown
---
title: "Headline in sentence-style title case, factual, no clickbait"
description: "One or two neutral sentences: what happened, who, when."
pubDate: 2026-11-13
section: "ev"            # tech | ai | auto | space | ev | science | health | politics  (omitted = tech)
tags: ["Tesla", "Charging", "EV"]
featured: false
image: "/images/<slug>.jpg"   # optional; public/images/<slug>.jpg is used automatically if present
imageAlt: "What the photo shows, for screen readers"
imageCredit: "Photographer or org / License (e.g. CC BY-SA 4.0, via Wikimedia Commons)"
---

Body in Markdown...
```

Optional: `updatedDate`, `draft: true` (hides it). The old `category:` field is deprecated; use `section:`.

## Photos

- Every article gets a lead photo saved to `public/images/<slug>.jpg` (about 1600px wide, JPEG, under ~400 KB).
- Only use images you may reuse: public domain/CC0, Creative Commons with attribution (Wikimedia Commons is the
  usual source), official press/media-kit images, or government (NASA, NOAA, etc.) imagery.
  Always fill `imageCredit` with author/org and license. No random Google Images, no news-agency photos
  (AP, Reuters, Getty) and no screenshots of other outlets' articles.
- If the photo is illustrative and not of the actual subject, say so in `imageCredit` (e.g. "(illustrative)").
- If there is no usable photo, leave it out; the site draws a branded section cover automatically.

## Videos are optional

Articles do **not** need a video or voiceover. Publish articles with photos in every section daily; the team
picks only the most compelling stories across the network for social videos (TikTok, Reels, X). When a video
exists, embed it as existing posts do (`/videos/<slug>.mp4` + `.png` poster).

## Rules that never change

- Never delete, move, rename or prune anything in `public/videos/` or `public/images/`.
- Keep everything factual and as neutral as possible; when a story must lean, it leans right. Label rumors as rumors and attribute claims.
- Run `/workspace/tiktok-pipeline/check_site_videos.sh` before pushing and `--live` after deploy.
- Build: `npx -y -p node@22 -- node node_modules/astro/bin/astro.mjs build` (box has Node 20).
- Deploy per `/workspace/tiktok-pipeline/README.md`: `git pull --ff-only`, commit, push `main` (Vercel deploys).
