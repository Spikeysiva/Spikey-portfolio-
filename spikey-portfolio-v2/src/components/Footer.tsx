import { ArrowUp } from 'lucide-react';
import { navLinks, site } from '../data/site';
import { prefersReducedMotion } from '../hooks/useReducedMotion';
import { SocialLinks } from './SocialLinks';
import { Star } from './Doodles';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    // Clear a section hash (e.g. #contact) but keep project routes (#/work/…).
    if (window.location.hash && !window.location.hash.startsWith('#/')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    document.querySelector<HTMLElement>('.nav__logo')?.focus({ preventScroll: true });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#top" className="footer__logo" aria-label="SPIKEY — back to home">
              SPIKEY<sup>®</sup>
            </a>
            <p className="footer__tagline">
              {site.tagline}
              <br />
              Thanks for scrolling all the way down. <Star className="footer__star" color="#FF007F" />
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <span className="footer__label">Navigate</span>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <span className="footer__label">Social</span>
            <SocialLinks tone="light" />
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} SPIKEY®. All rights reserved.</p>
          <p className="footer__made">Designed with a lot of colour &amp; a little chaos.</p>
          <button type="button" className="footer__top-btn" onClick={backToTop}>
            Back to top <ArrowUp size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
