import { profile } from "../data/Profile.js";

const SERVICES = [
  {
    num: "01",
    title: "Product & System Design",
    text: "Mengubah masalah yang rumit jadi sistem yang sederhana dan berjalan baik.",
  },
  {
    num: "02",
    title: "Web & Mobile Build",
    text: "React dan React Native, dari ide sampai produk yang siap dipakai.",
  },
  {
    num: "03",
    title: "AI-assisted Workflow",
    text: "Memakai AI tools untuk bergerak lebih cepat tanpa mengorbankan kualitas.",
  },
];

function normalizeWhatsapp(number) {
  const digits = number.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

export default function Contact() {
  const waLink = `https://wa.me/${normalizeWhatsapp(profile.contact.whatsapp)}`;

  return (
    <section id="contact" className="bento-row">
      {/* Panel "Services": sama seperti panel "What I Can Help You With" di referensi */}
      <div className="panel panel--dark">
        <div className="pf-label">Services</div>
        <h2 className="teaser-title">What I Can Help You With</h2>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.num}>
              <span className="service-card__num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Panel kontak: daftar link, gaya sama seperti list "Recent Work" di referensi */}
      <div className="panel panel--dark">
        <div className="pf-label">Let's Connect</div>
        <h2 className="teaser-title">Mari Bangun Sesuatu Bersama</h2>
        <p className="teaser-text">
          Terbuka untuk kolaborasi, project baru, atau sekadar diskusi soal
          sistem dan ide digital.
        </p>

        <div className="contact-list">
          <a className="contact-row" href={profile.contact.linkedin} target="_blank" rel="noreferrer">
            <h4>LinkedIn</h4>
            <span className="tag">Connect →</span>
          </a>
          <a className="contact-row" href={waLink} target="_blank" rel="noreferrer">
            <h4>WhatsApp</h4>
            <span className="tag">{profile.contact.whatsapp}</span>
          </a>
          <a className="contact-row" href={profile.contact.instagram} target="_blank" rel="noreferrer">
            <h4>Instagram</h4>
            <span className="tag">Follow →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
