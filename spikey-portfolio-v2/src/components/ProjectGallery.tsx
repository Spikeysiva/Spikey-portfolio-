import { projects } from '../data/projects';
import { CurlyArrow, Star } from './Doodles';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import './ProjectGallery.css';

export function ProjectGallery() {
  return (
    <section id="work" className="section work" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head work__head">
          <span className="eyebrow">
            <Star className="eyebrow__star" color="#FF007F" /> Selected Projects
          </span>
          <h2 id="work-title" className="section-title">
            Things I've <span className="hl-pink">Made</span>
          </h2>
          <p className="section-lede">A little bit of everything. A lot of creativity in every project.</p>
          <div className="work__hint" aria-hidden="true">
            <span>pick one!</span>
            <CurlyArrow className="work__hint-arrow" />
          </div>
        </Reveal>

        <div className="work__grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              className={`work__cell work__cell--${project.size}`}
              delay={(i % 3) * 90}
            >
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
