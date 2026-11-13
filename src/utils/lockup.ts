/** Geometry shared by the header lockup SVG and the clickable section tag. Units are SVG viewBox units (height 120). */

/** Saira 900 italic advances (UPM 1000), same cap-height (688) and italic angle (-12°) as the path wordmark. */
export const SAIRA_ADV: Record<string, number> = {
  A: 697, B: 645, C: 550, D: 666, E: 593, F: 552, G: 649, H: 693, I: 332, J: 427,
  K: 693, L: 521, M: 899, N: 701, O: 695, P: 626, Q: 695, R: 654, S: 609, T: 577,
  U: 675, V: 663, W: 985, X: 702, Y: 662, Z: 620,
};

export const LOCKUP_H = 120;
export const TAG_X = 375.5221008;
export const TAG_Y = 19.108;
export const TAG_H = 34.008;
export const TAG_SLANT = 7.2301008;
export const TAG_FONT = 26;
export const TAG_PAD_L = 16;
/** Right padding includes room for the chevron. */
export const TAG_PAD_R = 34;
/** Wordmark (badge + JUSTIN/CREDIBLE) extends to about this x without a tag. */
export const WORDMARK_RIGHT = 432;

export function tagTextWidth(label: string): number {
  return [...label.toUpperCase()].reduce((n, ch) => n + (SAIRA_ADV[ch] ?? 600) / 1000 * TAG_FONT, 0);
}

export function tagWidth(label: string): number {
  return TAG_PAD_L + tagTextWidth(label) + TAG_PAD_R;
}

export function lockupViewBoxWidth(label: string, reserveTag = true): number {
  if (!reserveTag) return WORDMARK_RIGHT;
  return Math.max(WORDMARK_RIGHT, TAG_X + tagWidth(label) + 10);
}

export const MASTER_ACCENT = '#e0b020';

const TAG_NAVY = '#0B1426';
const TAG_WHITE = '#ffffff';

function channelLin(c: number): number {
  const x = c / 255;
  return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}
function relLum(hex: string): number {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * channelLin(r) + 0.7152 * channelLin(g) + 0.0722 * channelLin(b);
}
function contrast(a: string, b: string): number {
  const L1 = relLum(a);
  const L2 = relLum(b);
  const hi = Math.max(L1, L2);
  const lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}

/** Navy or white text on a vibrant tag fill, whichever contrasts more. */
export function tagInk(fill: string): typeof TAG_NAVY | typeof TAG_WHITE {
  return contrast(fill, TAG_NAVY) >= contrast(fill, TAG_WHITE) ? TAG_NAVY : TAG_WHITE;
}
