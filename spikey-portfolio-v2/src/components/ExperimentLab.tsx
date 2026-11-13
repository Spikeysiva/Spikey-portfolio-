import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { prefersReducedMotion } from '../hooks/useReducedMotion';
import { LabArt, type LabKind } from './LabArt';
import { Reveal } from './Reveal';
import { Sparkle, Star } from './Doodles';
import './ExperimentLab.css';

interface Experiment {
  kind: LabKind;
  title: string;
  note: string;
}

const experiments: Experiment[] = [
  { kind: 'checker', title: 'Red Checkerboard', note: 'Grids, lenses and optical tricks.' },
  { kind: 'waves', title: 'Orange Waves', note: 'Organic shapes that just keep flowing.' },
  { kind: 'brush', title: 'Purple Brush', note: 'Rough textures and happy accidents.' },
  { kind: 'botanical', title: 'Cyan Botanical', note: 'Leaves, petals and pattern play.' },
  { kind: 'type', title: 'Green Type', note: 'Letters bent, stacked and outlined.' },
];

export function ExperimentLab() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  // Smooth horizontal scroll for the mobile carousel.
  const scrollByPanel = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const panel = track.querySelector<HTMLElement>('.lab__panel');
    const step = panel ? panel.offsetWidth + 14 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <section id="lab" className="section lab" aria-labelledby="lab-title">
      <div className="container">
        <Reveal className="section-head lab__head">
          <span className="eyebrow">
            <Star className="eyebrow__star" color="#FFE36E" /> Side quests
          </span>
          <h2 id="lab-title" className="section-title">
            SPIKEY <span className="hl-block">Experiment</span> Lab
          </h2>
          <p className="section-lede">
            Where I play with no brief and no rules. Hover (or tap) a panel to take a closer look.
          </p>
          <Sparkle className="lab__sparkle float" color="#FF007F" />
        </Reveal>

        <Reveal>
          <ul ref={trackRef} className="lab__track" aria-label="Experiments">
            {experiments.map((exp, i) => {
              const isActive = active === i;
              return (
                <li key={exp.kind} className={`lab__panel ${isActive ? 'is-active' : ''}`}>
                  <button
                    type="button"
                    className="lab__btn"
                    aria-pressed={isActive}
                    aria-label={`Experiment ${String(i + 1).padStart(2, '0')}: ${exp.title}. ${exp.note}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    data-cursor="Play"
                  >
                    <LabArt kind={exp.kind} className="lab__art" />
                    <span className="lab__num" aria-hidden="true">
                      EXP—{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="lab__caption" aria-hidden="true">
                      <span className="lab__title">{exp.title}</span>
                      <span className="lab__note">{exp.note}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="lab__controls">
          <button
            type="button"
            className="lab__arrow"
            onClick={() => scrollByPanel(-1)}
            aria-label="Previous experiment"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="lab__arrow"
            onClick={() => scrollByPanel(1)}
            aria-label="Next experiment"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
