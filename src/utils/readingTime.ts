/** Rough reading-time estimate from Markdown body text. */
export function readingTime(text: string, wpm = 220): string {
  const words = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`\[\]()!-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} min read`;
}
