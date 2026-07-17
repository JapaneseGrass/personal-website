// Safely join Astro's base path with a relative asset path.
// import.meta.env.BASE_URL may or may not have a trailing slash depending on
// config, so normalize both sides to avoid "/basefile.pdf" style breakage.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}
