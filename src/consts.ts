export const SITE_TITLE = 'JustinCredibleTech';
export const SITE_TAGLINE = 'Tech, EVs, space, science and health news, explained clearly';
export const SITE_DESCRIPTION =
  'JustinCredibleTech covers consumer tech, AI, cars and EVs, space, science and medical breakthroughs, plus non-political breaking news, explained clearly by Justin.';
export const SITE_AUTHOR = 'Justin';
export const SITE_HANDLE = '@JCredibleTech';
export const SITE_X = 'https://x.com/JCredibleTech';
export const SITE_TIKTOK = 'https://www.tiktok.com/@officaljustincredible';
/** Official home of the site. Canonical URLs always point here. */
export const CANONICAL_ORIGIN = 'https://justincredibletech.com';

// Follow links shown as icons in the footer. To roll out a new social, add one line here;
// `icon` must be a key in src/utils/socialIcons.ts (instagram, youtube, facebook, threads, bluesky are ready).
export const SOCIALS: { name: string; label: string; url: string; icon: string }[] = [
  { name: 'X', label: '@JCredibleTech', url: SITE_X, icon: 'x' },
  { name: 'TikTok', label: 'TikTok', url: SITE_TIKTOK, icon: 'tiktok' },
];
