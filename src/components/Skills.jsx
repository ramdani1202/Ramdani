import React from 'react';

const experience = [
  { year: '2024 — kini', role: 'Pengembang Aplikasi Internal', place: 'DAWA (Bisnis Herbal)' },
  { year: '2022 — 2024', role: 'Operator Produksi', place: 'Lantai Pabrik' },
  { year: '2021 — kini', role: 'Penulis & Kreator Konten', place: 'jurnalRamdani' },
];

const education = [
  { year: '—', role: 'Belajar mandiri', place: 'Pemrograman & Desain Digital' },
];

const skills = ['Stamping, Cutting, Ultrasonic Welding', 'HTML / CSS / JS, PWA Development', 'Desain Grafis & Video Editing', 'AI Tools, Excel Tracking'];

const softwares = ['Figma', 'VS Code', 'Excel', 'Canva', 'Premiere', 'ReportLab'];

function Item({ year, role, place }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'baseline' }}>
        <span style={{ color: 'var(--coral)', fontWeight: 800 }}>+</span>
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--coral)', display: 'block' }}>{year}</span>
          <span style={{ fontWeight: 700, color: 'var(--navy)' }}>{role}</span>
          <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--brown)' }}>{place}</span>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section style={{ background: 'var(--lavender)', padding: '4rem 1.5rem' }}>
      <style>{`
        .exp-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        .exp-heading {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--navy);
          margin-bottom: 1.2rem;
          transform: rotate(-1deg);
          display: inline-block;
        }
        .soft-chip {
          display: inline-block;
          background: var(--paper);
          border: 2px solid var(--navy);
          border-radius: 0.6rem;
          padding: 0.35rem 0.8rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--navy);
          margin: 0 0.5rem 0.5rem 0;
        }
        @media (max-width: 700px) {
          .exp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="exp-grid">
        <div>
          <span className="exp-heading">Pengalaman</span>
          {experience.map((e) => <Item key={e.role} {...e} />)}

          <span className="exp-heading" style={{ marginTop: '1rem' }}>Pendidikan</span>
          {education.map((e) => <Item key={e.role} {...e} />)}
        </div>

        <div>
          <span className="exp-heading">Kemampuan</span>
          {skills.map((s) => (
            <div key={s} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <span style={{ color: 'var(--coral)', fontWeight: 800 }}>+</span>
              <span style={{ color: 'var(--navy)', fontWeight: 600 }}>{s}</span>
            </div>
          ))}

          <span className="exp-heading" style={{ marginTop: '1rem' }}>Alat Bantu</span>
          <div>
            {softwares.map((s) => <span key={s} className="soft-chip">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
