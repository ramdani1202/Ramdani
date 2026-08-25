import React from 'react';

function WaveDivider() {
  return (
    <div style={{ position: 'relative', lineHeight: 0, background: '#F2EDE4' }}>
      <style>{`
        @keyframes waveDrift {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .wave-layer {
          animation: waveDrift 18s linear infinite;
          width: 200%;
        }
        .wave-layer.slow {
          animation-duration: 26s;
          animation-direction: reverse;
        }
        @media (prefers-reduced-motion: reduce) {
          .wave-layer { animation: none; }
        }
      `}</style>
      <svg
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '140px' }}
      >
        <path
          className="wave-layer slow"
          d="M0,100 C200,160 400,40 600,100 C800,160 1000,40 1200,100
             C1400,160 1600,40 1800,100 C2000,160 2200,40 2400,100
             L2400,200 L0,200 Z"
          fill="#B9E4F7"
          opacity="0.6"
        />
        <path
          className="wave-layer"
          d="M0,120 C200,60 400,180 600,120 C800,60 1000,180 1200,120
             C1400,60 1600,180 1800,120 C2000,60 2200,180 2400,120
             L2400,200 L0,200 Z"
          fill="#6EC6FF"
          opacity="0.75"
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
