import { navLinks, type SectionId } from '../data/site';
import './Navbar.css';

/** Label colours for the editorial navigation bar. */
const COLORS: Record<SectionId, string> = {
  top: '#00BB79', // HOME — green
  work: '#168DF0', // MY WORK — blue
  about: '#FFB43B', // ABOUT — orange/yellow
  services: '#FF007F', // SERVICES — pink
  contact: '#FF615B', // CONTACT — coral red
};

interface NavbarProps {
  active: string;
  className?: string;
}

/**
 * Editorial navigation bar: bold SPIKEY® logo on the left, five colourful
 * labels on the right. Sits in the page flow (bottom of the hero on the home
 * page, top of project pages) — it is not a fixed header.
 */
export function Navbar({ active, className = '' }: NavbarProps) {
  return (
    <div className={`sitenav ${className}`.trim()}>
      <a href="#top" className="sitenav__logo nav__logo" aria-label="SPIKEY — home">
        SPIKEY<sup>®</sup>
      </a>

      <nav aria-label="Main">
        <ul className="sitenav__list">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`sitenav__label ${isActive ? 'is-active' : ''}`}
                  style={{ background: COLORS[link.id] }}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
