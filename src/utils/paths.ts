/** Join a site-relative path with Astro's configured `base` (BASE_URL). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const cleaned = String(path).replace(/^\/+/, '');
  return cleaned ? `${base}${cleaned}` : base;
}
