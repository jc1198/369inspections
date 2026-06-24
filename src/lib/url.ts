/**
 * Prefix an internal, root-relative path with the configured base path so links
 * work whether the site is served at the domain root or a subpath
 * (e.g. /369inspections/ on GitHub Pages).
 *
 * Leaves anchors (#…), external URLs, and mailto:/tel: links untouched.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
