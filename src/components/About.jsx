import React from 'react';

export default function About() {
  return (
    <section style={{ background: 'var(--cream)', padding: '4rem 1.5rem' }}>
      <style>{`
        .about-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr; }
        }
        .hello-tag {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          color: var(--navy);
          transform: rotate(-2deg);
          display: inline-block;
        }
        .contact-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 600;
          color: var(--navy);
          margin-top: 0.7rem;
        }
        .contact-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--coral);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
      `}</style>
      <div className="about-grid">
        <div>
          <span className="hello-tag">Halo!</span>
        </div>
        <div>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--brown)', marginBottom: '1.1rem' }}>
            Nama saya <strong style={{ color: 'var(--navy)' }}>Ramdani</strong>. Saya membangun sesuatu
            dengan tangan dan dengan pikiran — mulai dari presisi kerja mesin di lantai
            produksi, sampai aplikasi digital yang saya rancang sendiri untuk menjalankan
            bisnis herbal DAWA.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--brown)', marginBottom: '1.5rem' }}>
            Di sela itu, saya menulis dan berbagi refleksi lewat jurnalRamdani. Saya percaya
            proses yang sabar dan bertahap mengalahkan hasil yang terburu-buru.
          </p>

          <div className="contact-pill">
            <span className="contact-icon">✉</span> ramdani@example.com
          </div>
          <div className="contact-pill">
            <span className="contact-icon">▶</span> jurnalRamdani
          </div>
          <div className="contact-pill">
            <span className="contact-icon">☎</span> +62 8xx-xxxx-xxxx
          </div>
        </div>
      </div>
    </section>
  );
}
