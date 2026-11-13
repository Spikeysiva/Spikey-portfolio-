import { Fragment } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
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

/*
  Pen Tool layer
  --------------
  Every word and every star carries one segment of a single continuous Bézier
  path. Segments start and end at mid-height with a horizontal tangent, so they
  join seamlessly. Over a word the path arcs below ("down") or above ("up") the
  text, alternating, with an anchor point at the extreme. Every third anchor is
  "selected": it shows its direction handles, and the handles slowly
  lengthen/shorten while the curve reshapes with them.

  Coordinates use a 0–100 viewBox stretched over each item
  (preserveAspectRatio="none"); vector-effect keeps the stroke hair-thin.
*/
const LOW = 92; // arc extreme for "down" words (% of pen-layer height)
const HIGH = 8; // arc extreme for "up" words
const seg = (y: number, c: number) => `M0 50 C25 50 ${c} ${y} 50 ${y} C${100 - c} ${y} 75 50 100 50`;

function PenSegment({
  dir,
  selected,
  nib,
  animate,
}: {
  dir: 'up' | 'down';
  selected: boolean;
  nib: boolean;
  animate: boolean;
}) {
  const y = dir === 'down' ? LOW : HIGH;
  return (
    <span className={`pen pen--${dir} ${selected ? 'pen--selected' : ''}`}>
      <svg className="pen__curve" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
        <path d={seg(y, 25)} vectorEffect="non-scaling-stroke">
          {selected && animate && (
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.5;1"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
              values={`${seg(y, 25)};${seg(y, 31)};${seg(y, 25)}`}
            />
          )}
        </path>
      </svg>
      {selected && <span className="pen__handles" />}
      <span className="pen__anchor" />
      {nib && (
        <span className="pen__nib">
          <svg viewBox="0 0 24 24" focusable="false">
            {/* pen-tool nib: tip at bottom-left, touching the handle end */}
            <path d="M2 22 L6.5 12.5 L14.5 4.5 L19.5 9.5 L11.5 17.5 Z" />
            <path d="M2 22 L8.6 15.4" />
            <circle cx="9.6" cy="14.4" r="1.4" />
            <path d="M14.5 4.5 L16.5 2.5 L21.5 7.5 L19.5 9.5" />
          </svg>
        </span>
      )}
    </span>
  );
}

/** Infinite scrolling strip of words — decorative, so hidden from screen readers. */
export function Marquee({ words = DEFAULT_WORDS, tone = 'pink', tilt = true }: MarqueeProps) {
  const reduced = useReducedMotion();

  const group = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {words.map((w, i) => (
        <Fragment key={w}>
          <span className="marquee__word">
            <PenSegment
              dir={i % 2 === 0 ? 'down' : 'up'}
              selected={i % 3 === 0}
              nib={i === 0}
              animate={!reduced}
            />
            <span className="marquee__text">{w}</span>
          </span>
          <span className="marquee__sep">
            <span className="pen pen--line">
              <svg className="pen__curve" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
                <path d="M0 50 L100 50" vectorEffect="non-scaling-stroke" />
              </svg>
            </span>
            <Star className="marquee__star" />
          </span>
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
