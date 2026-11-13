import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks, site } from '../data/site';
import { Star } from './Doodles';
import './Navbar.css';

interface NavbarProps {
  active: string;
}

export function Navbar({ active }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__bar">
        <a href="#top" className="nav__logo" onClick={close} aria-label="SPIKEY — back to home">
          SPIKEY<sup>®</sup>
        </a>

        <nav className="nav__links" aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'is-active' : undefined}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__right">
          {site.availableForProjects && (
            <span className="status-pill">
              <span className="status-pill__dot" aria-hidden="true" />
              Available for Projects
            </span>
          )}
          <a href="#contact" className="btn btn--pink btn--sm nav__cta">
            Let's Talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <Star className="mobile-menu__star" color="#FFE36E" />
        <nav aria-label="Mobile">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.id} style={{ animationDelay: `${60 + i * 50}ms` }}>
                <a href={`#${link.id}`} onClick={close}>
                  <span className="mobile-menu__num">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          {site.availableForProjects && (
            <span className="status-pill status-pill--light">
              <span className="status-pill__dot" aria-hidden="true" />
              Available for Projects
            </span>
          )}
          <a href="#contact" className="btn btn--pink" onClick={close}>
            Let's Talk <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
