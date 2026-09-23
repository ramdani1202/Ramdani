import { projects } from "../data/Project.js";

export default function Project() {
  return (
    <div className="panel panel--dark" id="project">
      <div className="pf-label">Recent Work</div>
      <h2 className="teaser-title">Latest Projects &amp; Collaborations</h2>

      <div className="gallery-grid">
        {projects.map((p) => (
          <a
            className="gallery-card"
            href={p.links?.live || "#"}
            target={p.links?.live && p.links.live !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            key={p.id}
          >
            {p.image ? (
              <img className="gallery-card__img" src={p.image} alt={p.title} />
            ) : (
              <div className="gallery-card__ph">{p.title.charAt(0)}</div>
            )}
            <div className="gallery-card__info">
              <h4>{p.title}</h4>
              <span className="gallery-card__view">
                <span className="dot" aria-hidden="true" />
                View
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
