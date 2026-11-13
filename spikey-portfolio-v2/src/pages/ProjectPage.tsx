import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getProject, projects, type Project } from '../data/projects';
import { projectHref } from '../hooks/useHashRoute';
import { ProjectArt } from '../components/ProjectArt';
import { Reveal } from '../components/Reveal';
import { Star } from '../components/Doodles';
import './ProjectPage.css';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function Media({ project, index, className }: { project: Project; index: number; className?: string }) {
  const img = project.images?.[index];
  if (img) {
    return (
      <img
        src={asset(img)}
        alt={`${project.title} — image ${index + 1}`}
        className={className}
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }
  return (
    <ProjectArt
      kind={project.art}
      bg={project.color}
      variant={index}
      className={className}
      label={`${project.title} placeholder artwork ${index + 1}`}
    />
  );
}

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  const index = project ? projects.indexOf(project) : -1;

  useEffect(() => {
    document.title = project ? `${project.title} — SPIKEY®` : 'Project not found — SPIKEY®';
    return () => {
      document.title = 'SPIKEY® — Graphic Designer & Visual Creative';
    };
  }, [project]);

  if (!project) {
    return (
      <section className="pp pp--missing container">
        <h1 className="pp__title">Oops, that project wandered off.</h1>
        <p className="pp__summary">It might have been renamed or removed.</p>
        <a href="#work" className="btn btn--pink btn--lg">
          <ArrowLeft size={18} aria-hidden="true" /> Back to all projects
        </a>
      </section>
    );
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const isPlaceholder = !project.images?.length;
  // Placeholders get two alternate artworks; real projects show images[1..].
  const galleryIndexes = isPlaceholder ? [1, 2] : (project.images ?? []).slice(1).map((_, i) => i + 1);

  return (
    <article className="pp">
      <div className="container">
        <nav className="pp__crumbs" aria-label="Breadcrumb">
          <a href="#work" className="pp__back">
            <ArrowLeft size={18} aria-hidden="true" /> All projects
          </a>
          <span className="pp__count">
            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </nav>

        <header className="pp__head intro-anim">
          <span className="pp__cat" style={{ background: project.color, color: project.ink }}>
            {project.category}
          </span>
          <h1 className="pp__title">{project.title}</h1>
          <p className="pp__summary">{project.summary}</p>
        </header>

        <div className="pp__hero intro-anim" style={{ background: project.color, animationDelay: '120ms' }}>
          <Media project={project} index={0} className="pp__hero-media" />
          {isPlaceholder && <span className="pcard__badge">Placeholder artwork — replace me</span>}
        </div>

        <div className="pp__info">
          <Reveal className="pp__meta">
            <dl>
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Deliverables</dt>
                <dd>
                  <ul className="pp__tags">
                    {project.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              {isPlaceholder && (
                <div>
                  <dt>Status</dt>
                  <dd>Placeholder concept — swap in real work in src/data/projects.ts</dd>
                </div>
              )}
            </dl>
          </Reveal>

          <Reveal className="pp__overview" delay={100}>
            <h2>
              The story <Star className="pp__star" color="#FF007F" />
            </h2>
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="pp__gallery">
          {galleryIndexes.map((i) => (
            <Reveal key={i} className="pp__shot" delay={(i - 1) * 100} style={{ background: project.color }}>
              <Media project={project} index={i} className="pp__shot-media" />
            </Reveal>
          ))}
        </div>

        <Reveal className="pp__cta">
          <p>Like what you see?</p>
          <h2>Let's make something like this for you.</h2>
          <a href="#contact" className="btn btn--ink btn--lg">
            Let's Talk <MessageCircle size={18} aria-hidden="true" />
          </a>
        </Reveal>

        <nav className="pp__pager" aria-label="More projects">
          <a href={projectHref(prev.slug)} className="pp__pager-link" data-cursor="Prev">
            <span className="pp__pager-dir">
              <ArrowLeft size={16} aria-hidden="true" /> Previous
            </span>
            <span className="pp__pager-title">{prev.title}</span>
            <span className="pp__pager-cat">{prev.category}</span>
          </a>
          <a href={projectHref(next.slug)} className="pp__pager-link pp__pager-link--next" data-cursor="Next">
            <span className="pp__pager-dir">
              Next <ArrowRight size={16} aria-hidden="true" />
            </span>
            <span className="pp__pager-title">{next.title}</span>
            <span className="pp__pager-cat">{next.category}</span>
          </a>
        </nav>

        <p className="pp__all">
          <a href="#work" className="btn btn--outline">
            See all projects <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </p>
      </div>
    </article>
  );
}
