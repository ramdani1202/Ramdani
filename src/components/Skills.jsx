import React from 'react';

const skillGroups = [
  {
    group: 'Tangan & Mesin',
    color: '#8A6A4F',
    items: ['Stamping', 'Cutting', 'Ultrasonic Welding', 'Mesin Dakron'],
  },
  {
    group: 'Digital & Kreatif',
    color: '#4A5D50',
    items: ['HTML / CSS / JS', 'PWA Development', 'Desain Grafis', 'Video Editing'],
  },
  {
    group: 'Alat Bantu',
    color: '#2E5D8A',
    items: ['AI Tools', 'ReportLab (PDF)', 'Excel Tracking'],
  },
];

export default function Skills() {
  return (
    <section style={{ background: '#F2EDE4', padding: '2rem 1.5rem 5rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <span
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '2px',
            color: '#8A6A4F',
            textTransform: 'uppercase',
          }}
        >
          Arsip — Kemampuan
        </span>
        <h2
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: '#2E2A26',
            margin: '0.75rem 0 2.5rem',
          }}
        >
          Yang saya kerjakan
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillGroups.map((g) => (
            <div
              key={g.group}
              style={{
                background: '#fff',
                borderRadius: '1.25rem',
                padding: '1.75rem',
                borderTop: `5px solid ${g.color}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: g.color,
                  marginBottom: '1rem',
                }}
              >
                {g.group}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {g.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.98rem',
                      color: '#4A443C',
                      padding: '0.4rem 0',
                      borderBottom: '1px solid #EEE6D8',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
