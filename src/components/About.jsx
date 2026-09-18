import { profile } from "../data/Profile.js";
import { workPrinciples } from "../data/Skills.js";

export default function About() {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="pf-label">About</div>

        <div className="about__grid">
          <div className="about__bio">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="about__principles">
            <h3>Cara saya bekerja</h3>
            <ul>
              {workPrinciples.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
