import { skillCategories } from "../data/Skills.js";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <div className="pf-label pf-label--light">Skills</div>
        <h2 className="pf-heading">Tools dan bahasa yang saya pakai sehari-hari</h2>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div className="skill-card" key={cat.category}>
              <h3>{cat.category}</h3>
              <ul>
                {cat.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
