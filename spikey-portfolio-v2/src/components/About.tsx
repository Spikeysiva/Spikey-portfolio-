import { useState } from 'react';
import { site } from '../data/site';
import { Blob, Sparkle, Star, Underline } from './Doodles';
import { Reveal } from './Reveal';
import './About.css';

const facts = [
  { label: 'Loves', value: 'Bold colour & big type' },
  { label: 'Works across', value: 'Brand, print, motion & digital' },
  { label: 'Believes', value: 'Good design communicates' },
];

export function About() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__inner">
        <Reveal className="about__visual">
          <Blob className="about__blob" color="#FFE36E" />
          <figure className="about__polaroid">
            {imgOk ? (
              <img
                src={site.heroImage}
                alt="SPIKEY portrait"
                loading="lazy"
                decoding="async"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="about__polaroid-missing">Your portrait here</div>
            )}
            <figcaption>hi, it's me ✦ SPIKEY</figcaption>
          </figure>
          <span className="about__tape" aria-hidden="true" />
          <Star className="about__star float" color="#FF007F" />
          <Sparkle className="about__sparkle float float--slow" color="#5865F2" />
        </Reveal>

        <div className="about__copy">
          <Reveal>
            <span className="eyebrow">
              <Star className="eyebrow__star" color="#FF814A" /> About
            </span>
            <h2 id="about-title" className="section-title about__title">
              A Little{' '}
              <span className="about__about">
                About Me
                <Underline className="about__underline" color="#FF007F" />
              </span>
            </h2>
          </Reveal>

          <Reveal className="about__bubbles" delay={100}>
            <p className="bubble bubble--paper">
              I'm a graphic designer who enjoys experimenting with visuals, exploring creative ideas and
              turning concepts into meaningful designs.
            </p>
            <p className="bubble bubble--pink">
              From brand identities and print materials to motion graphics and digital experiences, I enjoy
              working across different creative disciplines.
            </p>
            <p className="bubble bubble--paper">
              For me, design isn't just about making things look good.{' '}
              <strong>It's about communicating ideas and creating memorable experiences.</strong>
            </p>
          </Reveal>

          <Reveal as="ul" className="about__facts" delay={180}>
            {facts.map((f) => (
              <li key={f.label}>
                <span>{f.label}</span>
                {f.value}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
