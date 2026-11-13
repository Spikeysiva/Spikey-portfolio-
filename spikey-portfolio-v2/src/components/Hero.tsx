import { useState } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { site } from '../data/site';
import { CurlyArrow, Smiley, Sparkle, Squiggle, Star, Underline } from './Doodles';
import './Hero.css';

type ImageState = 'loading' | 'loaded' | 'error';

export function Hero() {
  const [imageState, setImageState] = useState<ImageState>('loading');

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      {/* floating decorations */}
      <Star className="hero__deco hero__deco--star1 float" color="#FF007F" />
      <Sparkle className="hero__deco hero__deco--sparkle float float--slow" color="#5865F2" />
      <span className="hero__deco hero__deco--dot float" aria-hidden="true" />
      <span className="hero__deco hero__deco--ring float float--slow" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="hero__hello intro-anim" style={{ animationDelay: '0ms' }}>
            <span className="hero__wave" aria-hidden="true">
              👋
            </span>
            Welcome to my little corner of the internet
          </p>

          <h1 id="hero-title" className="hero__title intro-anim" style={{ animationDelay: '80ms' }}>
            <span className="hero__title-line">Hey! I'm</span>{' '}
            <span className="hero__name">
              SPIKEY
              <Underline className="hero__underline draw" color="#FFE36E" />
            </span>
          </h1>

          <p className="hero__role intro-anim" style={{ animationDelay: '160ms' }}>
            Graphic Designer, Visual Creative &amp;{' '}
            <span className="marker">Professional Idea Destroyer.</span>
          </p>

          <p className="hero__lede intro-anim" style={{ animationDelay: '240ms' }}>
            I turn ordinary ideas into extraordinary visual experiences. From branding to motion, I love
            making things that stand out.
          </p>

          <div className="hero__ctas intro-anim" style={{ animationDelay: '320ms' }}>
            <a href="#work" className="btn btn--pink btn--lg">
              Explore My Work <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--outline btn--lg">
              Let's Talk <MessageCircle size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__visual intro-anim" style={{ animationDelay: '200ms' }}>
          <div className={`hero__frame hero__frame--${imageState}`}>
            {imageState !== 'error' ? (
              <img
                src={site.heroImage}
                alt="Portrait of SPIKEY in black and white against a bright pink circle"
                className="hero__img"
                loading="eager"
                decoding="async"
                onLoad={() => setImageState('loaded')}
                onError={() => setImageState('error')}
              />
            ) : (
              <div className="hero__img-missing" role="note">
                <span className="hero__img-missing-circle" aria-hidden="true" />
                <p>
                  Portrait goes here
                  <small>
                    Add your image at <code>public/images/spikey-hero.webp</code>
                  </small>
                </p>
              </div>
            )}
          </div>

          {/* circular rotating sticker */}
          <div className="hero__sticker" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="spin-slow">
              <defs>
                <path id="sticker-circle" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
              </defs>
              <text>
                {/* textLength = circumference (2π × 44) so the phrase wraps the circle exactly */}
                <textPath href="#sticker-circle" startOffset="0" textLength="276" lengthAdjust="spacingAndGlyphs">
                  DESIGN ✦ MOTION ✦ BRANDING ✦ ART ✦
                </textPath>
              </text>
            </svg>
            <Star className="hero__sticker-star" color="#FF007F" />
          </div>

          <div className="hero__note" aria-hidden="true">
            <span>that's me!</span>
            <CurlyArrow className="hero__note-arrow" color="#080808" />
          </div>

          <Smiley className="hero__smiley float" color="#FFE36E" />
          <Squiggle className="hero__squiggle" color="#FF814A" />
        </div>
      </div>
    </section>
  );
}
