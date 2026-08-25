import React from 'react';
import AboutIntro from './AboutIntro.jsx';

const softwareSkills = [
  { name: 'HTML/CSS/JS', level: 85, color: '#2E5D8A' },
  { name: 'PWA Dev', level: 80, color: '#4A5D50' },
  { name: 'Photoshop', level: 70, color: '#8A6A4F' },
  { name: 'Video Editing', level: 65, color: '#C9A961' },
];

export default function About() {
  return (
    <section style={{ background: '#F2EDE4', paddingBottom: '4rem' }}>
      <AboutIntro />

      <div style={{ maxWidth: 900, margin: '-3rem auto 0', padding: '0 1.25rem', position: 'relative', zIndex: 10 }}>
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '2rem',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
          }}
        >
          <span
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '2px',
              color: '#C9A961',
              textTransform: 'uppercase',
            }}
          >
            About Me!
          </span>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              marginTop: '1.5rem',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ flex: '1 1 320px', minWidth: 260 }}>
              <h1
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 6vw, 3.2rem)',
                  color: '#2E5D8A',
                  margin: 0,
                  lineHeight: 1.05,
                }}
              >
                RAMDANI
              </h1>
              <p
                style={{
                  fontFamily: "'Baloo 2', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: '#8A6A4F',
                  margin: '0.4rem 0 1.2rem',
                }}
              >
                a.k.a jurnalRamdani
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4A443C', marginBottom: '1rem' }}>
                <strong>Hai!</strong> Saya membangun sesuatu dengan tangan dan
                dengan pikiran — mulai dari presisi kerja mesin di lantai
                produksi, sampai aplikasi digital yang saya rancang sendiri
                untuk bisnis herbal DAWA. Di sela itu, saya menulis dan
                berbagi refleksi lewat jurnalRamdani.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4A443C' }}>
                Saya percaya proses yang sabar dan bertahap mengalahkan hasil
                yang terburu-buru — setiap karya di sini adalah catatan dari
                langkah demi langkah, bukan tujuan akhir.
              </p>
            </div>

            <div style={{ flex: '0 1 220px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #B9E4F7, #F2EDE4)',
                  border: '4px solid #C9A961',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 700,
                    color: '#8A6A4F',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    padding: '0 1rem',
                  }}
                >
                  Foto Ramdani
                  <br />
                  di sini
                </span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <h3
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#2E2A26',
                marginBottom: '1rem',
              }}
            >
              Keahlian
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {softwareSkills.map((s) => (
                <div key={s.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#4A443C' }}>{s.name}</span>
                  </div>
                  <div style={{ height: 8, background: '#EEE6D8', borderRadius: 999 }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${s.level}%`,
                        background: s.color,
                        borderRadius: 999,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
              }
