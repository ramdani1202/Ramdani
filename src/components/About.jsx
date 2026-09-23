import { profile } from "../data/Profile.js";
import { workPrinciples } from "../data/Skills.js";

export default function About() {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <div className="panel panel--dark" id="about">
      <div className="pf-label">About</div>
      <h2 className="teaser-title">Who I Am</h2>
      <p className="teaser-text">The person behind the work.</p>

      <div className="about-bio">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <div className="about-principles">
          {workPrinciples.map((p) => <span key={p}>{p}</span>)}
        </div>
      </div>
    </div>
  );
}
