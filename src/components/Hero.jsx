import { profile } from "../data/Profile.js";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__badge">Freelance Projects</div>

        <div className="hero__stage">
          <h1 className="hero__name">{profile.name}</h1>

          <div className="hero__portrait">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <div className="hero__portrait-placeholder">
                <span>Foto profil</span>
                <span className="hero__portrait-placeholder-sub">belum diupload</span>
              </div>
            )}
          </div>
        </div>

        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <a href="#project" className="hero__cta">
          View work <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
