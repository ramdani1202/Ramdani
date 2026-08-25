import React from 'react';

function WaveDivider() {
  // Continues the deep-sea colour the Hero ends on, then settles into the
  // paper background — like water receding as the page comes ashore.
  return (
    <div style={{ position: 'relative', lineHeight: 0, background: '#154A87' }}>
      <style>{`
        @keyframes waveDrift {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .wave-layer {
          animation: waveDrift 16s linear infinite;
          width: 200%;
        }
        @media (prefers-reduced-motion: reduce) {
          .wave-layer { animation: none; }
        }
      `}</style>
      <svg
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '110px' }}
      >
        <path
          className="wave-layer"
          d="M0,110 C200,60 400,150 600,110 C800,60 1000,150 1200,110
             C1400,60 1600,150 1800,110 C2000,60 2200,150 2400,110
             L2400,200 L0,200 Z"
          fill="#F2EDE4"
        />
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <section
      style={{
        background: '#F2EDE4',
        paddingBottom: '5rem',
      }}
    >
      <WaveDivider />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1.5rem 0' }}>
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
          Arsip — Tentang
        </span>
        <h2
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: '#2E2A26',
            margin: '0.75rem 0 1.5rem',
          }}
        >
          Halo, saya Ramdani
        </h2>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#4A443C',
            marginBottom: '1.25rem',
          }}
        >
          Saya membangun sesuatu dengan tangan dan dengan pikiran — mulai dari
          presisi kerja mesin di lantai produksi, sampai aplikasi digital
          yang saya rancang sendiri untuk menjalankan bisnis herbal DAWA.
          Di sela itu, saya menulis dan berbagi refleksi lewat jurnalRamdani.
        </p>
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#4A443C',
          }}
        >
          Saya percaya proses yang sabar dan bertahap mengalahkan hasil yang
          terburu-buru. Setiap karya di sini adalah bagian dari perjalanan
          itu — bukan tujuan akhir, tapi catatan dari langkah demi langkah.
        </p>
      </div>
    </section>
  );
}
