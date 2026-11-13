import { useEffect, useLayoutEffect, useRef } from 'react';
import { Cursor } from './components/Cursor';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { navLinks } from './data/site';
import { useActiveSection } from './hooks/useActiveSection';
import { useHashRoute, type Route } from './hooks/useHashRoute';
import { prefersReducedMotion } from './hooks/useReducedMotion';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';

const SECTION_IDS = navLinks.map((l) => l.id);

export default function App() {
  const route = useHashRoute();
  const prevRoute = useRef<Route | null>(null);
  const isHome = route.name === 'home';
  const routeKey = route.name === 'project' ? `project:${route.slug}` : 'home';

  // Scroll management when switching between pages.
  useLayoutEffect(() => {
    const prev = prevRoute.current;
    prevRoute.current = route;

    if (route.name === 'project') {
      if (prev?.name !== 'project' || prev.slug !== route.slug)
        window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Came back to home from a project page: the target section didn't exist when
    // the browser handled the hash, so scroll to it ourselves.
    if (prev?.name === 'project') {
      const el = route.section ? document.getElementById(route.section) : null;
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [route]);

  // Initial load with a section hash (e.g. shared link to /#services).
  useEffect(() => {
    if (route.name !== 'home' || !route.section) return;
    const el = document.getElementById(route.section);
    if (el) {
      requestAnimationFrame(() =>
        el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = useActiveSection(SECTION_IDS, isHome);

  return (
    <>
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          // Don't change the hash (it drives routing) — just move focus.
          e.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar active={isHome ? active : 'work'} />
      <main id="main" tabIndex={-1} key={routeKey}>
        {route.name === 'project' ? <ProjectPage slug={route.slug} /> : <HomePage />}
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
