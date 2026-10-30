# JustinCredibleTech

Static tech blog — **tech drops, space, and science — explained clearly.**

Built with [Astro](https://astro.build) (static output + Markdown content collections). Voice: Justin / [@JCredibleTech](https://x.com/JCredibleTech). No analytics baked in; no politics.

## Quick start

```bash
npm install
npm run dev      # local preview
npm run build    # writes production site to dist/
npm run preview  # serve dist/ locally
```

**Node.js 22.12+** required (see `package.json` engines).

## Project layout

- `src/content/blog/` — Markdown posts (content collection)
- `src/pages/` — Home, About, blog index, post routes, RSS
- `public/` — favicon, logo, OG default image
- `dist/` — build output (deploy this folder or connect the repo)

## Free hosting

### Cloudflare Pages

1. Push this repo to GitHub/GitLab.
2. In Cloudflare Pages → Create project → connect the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (or newer)
4. Deploy. You’ll get a `*.pages.dev` URL. Add a custom domain later when you’re ready to pay/configure DNS.

### Netlify (Git)

1. Add a new site from Git.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set `NODE_VERSION` to `22` in environment variables if needed.

### Netlify Drop (no Git)

1. Run `npm run build` locally.
2. Open [Netlify Drop](https://app.netlify.com/drop).
3. Drag the entire `dist/` folder onto the page.
4. Instant static hosting. Custom domain can wait.

Any other static host (GitHub Pages with an Actions build, S3+CloudFront, etc.) works the same way: publish the contents of `dist/`.

## Brand

- **Name:** JustinCredibleTech  
- **Colors:** Midnight Navy `#0B1426` + Signal Gold `#D8B03A`  
- **Header logo:** JC badge + stacked JUSTIN / CREDIBLE + TECH tag (`public/brand/jc-header-light.svg`, `jc-header-dark.svg`)  
- **Favicon / icons:** JC badge (`favicon.svg`, `.ico`, 16/32/48 PNG, apple-touch-icon, android-chrome 192/512); share card `og-default.png` (1200x630)

## License / content

Site code is yours to deploy. Post content © JustinCredibleTech unless noted.

## Social icons
Footer follow icons come from `SOCIALS` in `src/consts.ts`. To add a new social, add one line there; the icon glyphs (official Simple Icons, CC0) live in `src/utils/socialIcons.ts`. Keep brand logos unmodified and equal in size.
