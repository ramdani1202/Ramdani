import { profile } from "../data/Profile.js";
import { workPrinciples } from "../data/Skills.js";

export default function About() {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <div className="panel about-panel" id="about">
      {profile.photoAlt && <img src={profile.photoAlt} alt={profile.name} />}
      <div className="about-panel__overlay" />
      <div className="about-panel__scrim" />

      <div className="about-panel__content">
        <div className="about-panel__label">About</div>
        <h2 className="about-panel__title">Who I Am</h2>
        <p className="about-panel__sub">The person behind the work.</p>

        <div className="about-panel__bio">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-panel__principles">
            {workPrinciples.map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
