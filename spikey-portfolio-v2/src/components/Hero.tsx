import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { site } from '../data/site';
import { projectHref } from '../hooks/useHashRoute';
import './Hero.css';

interface TagProps {
  href: string;
  color: string;
  /** Extra context for screen readers, e.g. "see my work". */
  hint: string;
  children: ReactNode;
}

/** Inline, colourful rounded label with a bold black arrow. Every label is a real link. */
function Tag({ href, color, hint, children, anchor }: TagProps & { anchor?: boolean }) {
  return (
    <a
      href={href}
      className="hero-tag"
      style={{ background: color }}
      data-portrait-anchor={anchor || undefined}
    >
      <ArrowRight className="hero-tag__arrow" strokeWidth={3.5} aria-hidden="true" />
      <span className="hero-tag__text">{children}</span>
      <span className="sr-only"> ({hint})</span>
    </a>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Keep the portrait centred directly above the SPIKEY label (wherever the
  // headline wraps), by shifting it horizontally by the label's offset.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const portrait = section?.querySelector<HTMLElement>('.hero__portrait');
    const label = section?.querySelector<HTMLElement>('[data-portrait-anchor]');
    const title = section?.querySelector<HTMLElement>('.hero__title');
    if (!section || !portrait || !label || !title) return;

    const align = () => {
      const p = portrait.getBoundingClientRect();
      const l = label.getBoundingClientRect();
      const offset = l.left + l.width / 2 - (p.left + p.width / 2);
      portrait.style.setProperty('--portrait-x', `${Math.round(offset)}px`);
    };

    align();
    document.fonts?.ready.then(align).catch(() => undefined);
    const ro = new ResizeObserver(align);
    ro.observe(title);
    ro.observe(portrait);
    window.addEventListener('resize', align);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', align);
    };
  }, []);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title" ref={sectionRef}>
      <div className="hero__inner container">
        {/*
          SPIKEY's original portrait, shown as a floating cutout: the photo's own
          black background melts into the hero's pure black, and the frame shows
          head → upper torso (display crop only — the file itself is untouched).
        */}
        <div className="hero__portrait">
          <img
            src={site.heroImage}
            width={1312}
            height={1199}
            alt="SPIKEY smiling with arms crossed, in black and white in front of a pink circle"
            className="hero__portrait-img"
            loading="eager"
            decoding="async"
          />
        </div>

        <h1 id="hero-title" className="hero__title">
          <span className="hero__row" style={{ animationDelay: '120ms' }}>
            HEY! I'M{' '}
            <Tag href="#about" color="#FF007F" hint="about me" anchor>
              SPIKEY
            </Tag>{' '}
            , A{' '}
            <Tag href="#work" color="#F05ACB" hint="see my work">
              GRAPHIC DESIGNER
            </Tag>
          </span>{' '}
          <span className="hero__row" style={{ animationDelay: '200ms' }}>
            AND{' '}
            <Tag href="#lab" color="#00BB79" hint="visit the Experiment Lab">
              VISUAL ARTIST
            </Tag>{' '}
            <Tag href={projectHref('odd-creatures')} color="#168DF0" hint="illustration project">
              ILLUSTRATOR
            </Tag>{' '}
            &amp;{' '}
            <Tag href={projectHref('bounce-motion-loop')} color="#FFE36E" hint="motion project">
              MOTION DESIGNER
            </Tag>
          </span>{' '}
          <span className="hero__row" style={{ animationDelay: '280ms' }}>
            GOT A PROJECT IN MIND?{' '}
            <Tag href="#contact" color="#FF615B" hint="go to the contact section">
              LET'S CHAT
            </Tag>
          </span>
        </h1>
      </div>
    </section>
  );
}
