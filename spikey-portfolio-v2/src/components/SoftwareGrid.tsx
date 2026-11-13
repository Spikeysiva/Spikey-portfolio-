import { SoftwareLogo, type SoftwareId } from './SoftwareLogo';
import { Reveal } from './Reveal';
import { Star } from './Doodles';
import './SoftwareGrid.css';

const tools: { id: SoftwareId; name: string; use: string }[] = [
  { id: 'photoshop', name: 'Adobe Photoshop', use: 'Photo & compositing' },
  { id: 'lightroom', name: 'Adobe Lightroom', use: 'Photo grading' },
  { id: 'illustrator', name: 'Adobe Illustrator', use: 'Vector & logos' },
  { id: 'premiere', name: 'Adobe Premiere Pro', use: 'Video editing' },
  { id: 'aftereffects', name: 'Adobe After Effects', use: 'Motion graphics' },
  { id: 'coreldraw', name: 'CorelDRAW', use: 'Print & layout' },
  { id: 'davinci', name: 'DaVinci Resolve', use: 'Edit & colour' },
];

export function SoftwareGrid() {
  return (
    <section id="toolbox" className="section toolbox" aria-labelledby="toolbox-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">
            <Star className="eyebrow__star" color="#5865F2" /> Toolbox
          </span>
          <h2 id="toolbox-title" className="section-title">
            My Creative <span className="hl-blue">Toolbox</span>
          </h2>
          <p className="section-lede">These are the tools I use to bring my ideas to life.</p>
        </Reveal>

        <ul className="toolbox__grid">
          {tools.map((tool, i) => (
            <Reveal as="li" key={tool.id} className="tool" delay={i * 60}>
              <div className="tool__logo">
                <SoftwareLogo id={tool.id} />
              </div>
              <span className="tool__name">{tool.name}</span>
              <span className="tool__use">{tool.use}</span>
            </Reveal>
          ))}
        </ul>
        <p className="toolbox__legal">
          All product names and logos are trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
}
