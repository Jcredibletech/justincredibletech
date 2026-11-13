# The JustinCredible network: authoring guide

justincredibletech.com is one Astro site with six sections. They all share the master brand (JC badge,
Inter type, header logo, layout); each section has its own accent color. Daily article runs follow this file.

## Sections

| Section | `section:` value | Landing page | Section RSS | Light accent | Dark accent |
|---|---|---|---|---|---|
| JustinCredible Tech | `tech` | `/tech/` | `/tech/rss.xml` | `#8a6a0c` gold | `#d8b03a` |
| JC Auto | `auto` | `/auto/` | `/auto/rss.xml` | `#c8102e` red | `#ff5c63` |
| JC Space | `space` | `/space/` | `/space/rss.xml` | `#4338ca` deep indigo | `#9b9cff` |
| JC EV | `ev` | `/ev/` | `/ev/rss.xml` | `#0e7490` electric teal | `#22d3ee` |
| JC Science | `science` | `/science/` | `/science/rss.xml` | `#15803d` green | `#4ade80` |
| JC Politics | `politics` | `/politics/` | `/politics/rss.xml` | `#7a3e8e` neutral plum | `#c99ae0` |

Light accents are at least 5:1 contrast on white, dark accents at least 6:1 on the dark theme background.
Colors live in two places that must stay in sync: `SECTIONS` in `src/utils/posts.ts` and the `--c-<slug>`
tokens in `src/styles/global.css`. The `.sec-<slug>` class sets `--sec` to the section color.

What goes where:
- **tech**: consumer tech, phones, computers, apps, AI labs and models, chips, big tech business, gaming, gadgets.
- **auto**: cars and trucks that are not primarily EV stories, motorsport, auto industry, transportation (trains, planes, crashes).
- **space**: rockets, launches, SpaceX/Starship/Starlink, NASA, satellites, missions.
- **ev**: electric vehicles, Tesla, charging, batteries, home energy, self-driving and robotaxis.
- **science**: research, discoveries, archaeology, math, health and medical breakthroughs, FDA approvals.
- **politics**: policy, government, Congress, regulation fights, elections. Strictly neutral: report what happened,
  who said what (each side in its own words, attributed), and what comes next. No opinion, no loaded labels,
  no partisan framing in headlines. Use politics only when the government/policy angle *is* the story;
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
section: "ev"            # tech | auto | space | ev | science | politics  (omitted = tech)
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
- Keep everything factual and neutral; label rumors as rumors and attribute claims.
- Run `/workspace/tiktok-pipeline/check_site_videos.sh` before pushing and `--live` after deploy.
- Build: `npx -y -p node@22 -- node node_modules/astro/bin/astro.mjs build` (box has Node 20).
- Deploy per `/workspace/tiktok-pipeline/README.md`: `git pull --ff-only`, commit, push `main` (Vercel deploys).
