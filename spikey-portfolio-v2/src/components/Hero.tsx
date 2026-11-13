import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { projectHref } from '../hooks/useHashRoute';
import { HeroDoodle } from './HeroDoodle';
import './Hero.css';

interface TagProps {
  href: string;
  color: string;
  /** Extra context for screen readers, e.g. "see my work". */
  hint: string;
  children: ReactNode;
}

/** Inline, colourful rounded label with a bold black arrow. Every label is a real link. */
function Tag({ href, color, hint, children }: TagProps) {
  return (
    <a href={href} className="hero-tag" style={{ background: color }}>
      <span className="hero-tag__text">{children}</span>
      <ArrowRight className="hero-tag__arrow" strokeWidth={3.5} aria-hidden="true" />
      <span className="sr-only"> ({hint})</span>
    </a>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <HeroDoodle className="hero__doodle" />

        <h1 id="hero-title" className="hero__title">
          <span className="hero__row" style={{ animationDelay: '120ms' }}>
            HEY! I'M{' '}
            <Tag href="#about" color="#FF007F" hint="about me">
              SPIKEY
            </Tag>
            , A{' '}
            <Tag href="#work" color="#F05ACB" hint="see my work">
              GRAPHIC DESIGNER
            </Tag>
          </span>{' '}
          <span className="hero__row" style={{ animationDelay: '220ms' }}>
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
            .
          </span>{' '}
          <span className="hero__row" style={{ animationDelay: '320ms' }}>
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
