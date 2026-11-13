import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { projectHref } from '../hooks/useHashRoute';
import { ProjectArt } from './ProjectArt';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isPlaceholder = !project.images?.length;
  const cover = project.images?.[0];

  return (
    <article className={`pcard pcard--${project.size}`}>
      <a
        href={projectHref(project.slug)}
        className="pcard__link"
        data-cursor="View"
        aria-label={`View project: ${project.title} — ${project.category}`}
      >
        <div className="pcard__media" style={{ background: project.color }}>
          {cover ? (
            <img
              src={`${import.meta.env.BASE_URL}${cover}`}
              alt={`${project.title} cover`}
              loading="lazy"
              decoding="async"
              className="pcard__img"
            />
          ) : (
            <ProjectArt kind={project.art} bg={project.color} className="pcard__img" />
          )}
          {isPlaceholder && <span className="pcard__badge">Placeholder — replace me</span>}
          <span className="pcard__num" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="pcard__view" aria-hidden="true">
            View Project <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="pcard__body">
          <div className="pcard__text">
            <span className="pcard__cat">{project.category}</span>
            <h3 className="pcard__title">{project.title}</h3>
            <p className="pcard__summary">{project.summary}</p>
          </div>
          <span className="pcard__arrow" aria-hidden="true">
            <ArrowUpRight size={22} />
          </span>
        </div>
      </a>
    </article>
  );
}
