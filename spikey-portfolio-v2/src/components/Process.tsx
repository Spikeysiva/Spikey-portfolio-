import { PenLine, Rocket, Search, Shapes } from 'lucide-react';
import { Reveal } from './Reveal';
import { Star } from './Doodles';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Discover',
    text: 'Understand the idea, goals and vision.',
    icon: Search,
    color: '#FFE36E',
    note: 'lots of questions',
  },
  {
    num: '02',
    title: 'Explore',
    text: 'Experiment with concepts, colours and visual directions.',
    icon: Shapes,
    color: '#5865F2',
    note: 'messy sketches',
  },
  {
    num: '03',
    title: 'Create',
    text: 'Transform ideas into polished creative work.',
    icon: PenLine,
    color: '#FF007F',
    note: 'the fun part',
  },
  {
    num: '04',
    title: 'Deliver',
    text: 'Present the final design, ready to make an impact.',
    icon: Rocket,
    color: '#FF814A',
    note: 'ta-da!',
  },
];

export function Process() {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">
            <Star className="eyebrow__star" color="#FF007F" /> Process
          </span>
          <h2 id="process-title" className="section-title">
            How I Make Things <span className="hl-pink">Happen</span>
          </h2>
        </Reveal>

        <Reveal className="process__wrap">
          <svg className="process__line" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M40 40 C 160 -10, 240 90, 370 40 S 580 -10, 630 40 S 840 90, 960 40"
              fill="none"
              stroke="#080808"
              strokeWidth="3"
              strokeDasharray="10 12"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <ol className="process__steps">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.num} className="step" style={{ animationDelay: `${150 + i * 140}ms` }}>
                  <div className="step__badge" style={{ background: step.color }}>
                    <Icon size={34} strokeWidth={2.2} aria-hidden="true" />
                    <span className="step__num">{step.num}</span>
                  </div>
                  <span className="step__note" aria-hidden="true">
                    {step.note}
                  </span>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__text">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
