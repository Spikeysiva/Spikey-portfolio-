import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { Smiley, Sparkle, Squiggle } from './Doodles';
import { Reveal } from './Reveal';
import './Services.css';

const SHAPES = ['blob-a', 'blob-b', 'blob-c', 'blob-d'];

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="services__panel">
        <Sparkle className="services__deco services__deco--sparkle float" color="#FFE36E" />
        <Squiggle className="services__deco services__deco--squiggle" color="#FF007F" />

        <div className="container">
          <Reveal className="section-head section-head--light">
            <span className="eyebrow eyebrow--light">Services</span>
            <h2 id="services-title" className="section-title">
              What Can I Do <span className="services__for">For You?</span>
            </h2>
            <p className="section-lede">
              Pretty much anything visual. Here's what I'm most often asked to make.
            </p>
          </Reveal>

          <ul className="services__grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal as="li" key={service.title} className="service" delay={(i % 4) * 70}>
                  <span
                    className={`service__icon ${SHAPES[i % SHAPES.length]}`}
                    style={{ background: service.color, color: service.ink }}
                    aria-hidden="true"
                  >
                    <Icon size={30} strokeWidth={2.2} />
                  </span>
                  <h3 className="service__title">{service.title}</h3>
                  <p className="service__desc">{service.description}</p>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="services__cta">
            <Smiley className="services__smiley" color="#FFE36E" />
            <p>Got something that's not on the list? I'd still love to hear about it.</p>
            <a href="#contact" className="btn btn--pink">
              Tell me about it <ArrowRight size={18} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
