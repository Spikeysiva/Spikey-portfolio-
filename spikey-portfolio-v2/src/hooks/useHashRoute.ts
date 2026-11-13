import { useEffect, useState } from 'react';

/**
 * Tiny hash router.
 *   #/work/<slug>  → project detail page
 *   #<section-id>  → home page, scrolled to that section
 *   (empty)        → home page
 * Hash routing works on any static host without server rewrites.
 */
export type Route = { name: 'home'; section: string | null } | { name: 'project'; slug: string };

export const projectHref = (slug: string) => `#/work/${slug}`;

function parse(hash: string): Route {
  const match = hash.match(/^#\/work\/([\w-]+)\/?$/);
  if (match) return { name: 'project', slug: match[1] };
  const section = hash.replace(/^#/, '');
  return { name: 'home', section: section && !section.startsWith('/') ? section : null };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
