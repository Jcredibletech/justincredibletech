export const SITE_TITLE = 'JustinCredibleTech';
export const SITE_TAGLINE = 'Independent coverage of tech, AI, autos, space, EVs, science, health and politics.';
export const SITE_DESCRIPTION =
  'Independent coverage of tech, AI, autos, space, EVs, science, health and politics. Factual, clear and straight to the point.';
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

// Post reactions backend (Supabase project "justincredibletech-reactions"). Public publishable key only:
// the browser can call just the guarded RPCs get_reactions / set_reaction; tables are not exposed.
export const REACTIONS_API = 'https://rgdxxcxfpnwicpuqxmyc.supabase.co';
export const REACTIONS_KEY = 'sb_publishable_9rSRH4UKdZyyhs69mK0lDQ_oPsVeJGk';
