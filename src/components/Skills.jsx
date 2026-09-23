import { skillCategories, workPrinciples } from "../data/Skills.js";

export default function Skills() {
  const tiles = skillCategories.slice(0, 3);
  const sideLeft = skillCategories[3];
  const sideRight = skillCategories[4];

  return (
    <section id="skills" className="bento-row">
      {/* Panel "Behind the Work": headline + CTA + 3 tile kecil, sama seperti panel "Shaping Experiences" */}
      <div className="panel panel--dark process-panel">
        <div className="pf-label">Behind the Work</div>
        <h2 className="teaser-title">Tools I Reach for Every Day</h2>
        <p className="teaser-text">
          Campuran AI tools, software desain, dan bahasa pemrograman — dipilih
          karena benar-benar menyelesaikan masalah, bukan sekadar tren.
        </p>
        <a href="#project" className="pf-btn pf-btn--solid">
          See the work <span className="pf-btn__dot" aria-hidden="true">→</span>
        </a>

        <div className="process-tiles">
          {tiles.map((cat) => (
            <div className="tile" key={cat.category}>{cat.category}</div>
          ))}
        </div>
      </div>

      {/* Panel Skills: 3 kartu, satu di-highlight — sama seperti panel "Pricing" di referensi */}
      <div className="panel panel--dark">
        <div className="pf-label">Skills</div>
        <h2 className="teaser-title">Tools &amp; Languages I Use</h2>

        <div className="skills-cards">
          <div className="skill-tier">
            <h4>{sideLeft.category}</h4>
            <ul>{sideLeft.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>

          <div className="skill-tier skill-tier--featured">
            <h4>How I Work</h4>
            <ul>{workPrinciples.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>

          <div className="skill-tier">
            <h4>{sideRight.category}</h4>
            <ul>{sideRight.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
