import { projects } from "../data/Project.js";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__placeholder">{project.title.charAt(0)}</div>
        )}
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="project-card__detail">
          <div>
            <h4>Tantangan</h4>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h4>Solusi</h4>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="project-card__links">
          <a href={project.links.live}>Live demo</a>
          <a href={project.links.source}>Source code</a>
          <a href={project.links.video}>Video</a>
        </div>
      </div>
    </article>
  );
}

export default function Project() {
  return (
    <section id="project" className="projects">
      <div className="projects__inner">
        <div className="pf-label">Project</div>
        <h2 className="pf-heading">Beberapa hal yang sudah saya bangun</h2>

        <div className="projects__grid">
          {projects.map((p) => <ProjectCard project={p} key={p.id} />)}
        </div>
      </div>
    </section>
  );
}
