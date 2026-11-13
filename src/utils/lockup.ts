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

export const MASTER_ACCENT = '#d8b03a';
