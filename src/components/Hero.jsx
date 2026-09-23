import { profile } from "../data/Profile.js";
import { workPrinciples } from "../data/Skills.js";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
];

export default function Hero() {
  return (
    <section id="top" className="bento-row">
      {/* Panel oranye: nav + nama besar, sama seperti panel "Creative Director" di referensi */}
      <div className="panel panel--orange hero-panel">
        <nav className="hero-nav">
          <span className="hero-nav__mark">{profile.name}</span>
          <div className="hero-nav__links">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
          <a href="#contact" className="pf-btn pf-btn--light">
            Get in touch <span className="pf-btn__dot" aria-hidden="true">→</span>
          </a>
        </nav>

        <div className="hero-badge">Hey, I'm a</div>
        <h1 className="hero-title">{profile.role}</h1>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-photo">
          {profile.photo && <img src={profile.photo} alt="" />}
        </div>

        <div className="hero-tags">
          {workPrinciples.slice(0, 4).map((p, i) => (
            <span key={p}>{String(i + 1).padStart(2, "0")} {p}</span>
          ))}
        </div>
      </div>

      {/* Panel gelap: About me teaser + foto duotone, sama seperti panel kanan di referensi */}
      <div className="panel panel--dark teaser-panel">
        <div className="teaser-label">About me</div>
        <h2 className="teaser-title">Self-taught. Curious. Built to solve problems.</h2>
        <p className="teaser-text">{profile.tagline}</p>

        <div className="teaser-photo">
          {profile.photo && <img src={profile.photo} alt={profile.name} />}
        </div>
        <a href="#about" className="pf-btn pf-btn--dark teaser-cta">
          Read more <span className="pf-btn__dot" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
