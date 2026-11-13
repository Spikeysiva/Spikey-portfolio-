import { Fragment } from 'react';
import { Star } from './Doodles';
import './Marquee.css';

const DEFAULT_WORDS = [
  'Branding',
  'Posters',
  'Packaging',
  'Social Media',
  'Illustration',
  'Motion',
  'Print',
  'Product',
];

interface MarqueeProps {
  words?: string[];
  tone?: 'pink' | 'ink' | 'yellow';
  tilt?: boolean;
}

/** Infinite scrolling strip of words — decorative, so hidden from screen readers. */
export function Marquee({ words = DEFAULT_WORDS, tone = 'pink', tilt = true }: MarqueeProps) {
  const group = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <Fragment key={w}>
          <span className="marquee__word">{w}</span>
          <Star className="marquee__star" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className={`marquee marquee--${tone} ${tilt ? 'marquee--tilt' : ''}`}>
        <div className="marquee__track">
          {group(false)}
          {group(true)}
        </div>
      </div>
    </div>
  );
}
