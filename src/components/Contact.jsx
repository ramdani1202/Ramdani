import { profile } from "../data/Profile.js";

export default function Contact() {
  const waLink = `https://wa.me/62${profile.contact.whatsapp.replace(/^0/, "")}`;

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2>Mari bangun sesuatu bersama.</h2>
        <p>Terbuka untuk kolaborasi, project baru, atau sekadar diskusi soal sistem dan ide digital.</p>

        <div className="contact__links">
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={waLink} target="_blank" rel="noreferrer">WhatsApp — {profile.contact.whatsapp}</a>
          <a href={profile.contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>

      <div className="contact__footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
    </section>
  );
}
