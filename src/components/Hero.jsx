import React from 'react';
import foto from '../assets/foto-ramdani.png';

function Squiggle({ color = '#E8623A', width = 140 }) {
  return (
    <svg viewBox="0 0 140 16" width={width} style={{ display: 'block' }}>
      <path
        d="M2 10 C 14 2, 24 2, 36 10 S 58 18, 70 10 S 94 2, 106 10 S 130 18, 138 8"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <header className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          background: linear-gradient(180deg, #FBE3CC 0%, #FDF6EC 70%);
          padding: 3.5rem 1.5rem 2.5rem;
          overflow: hidden;
        }
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          align-items: center;
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          background: var(--lavender);
          opacity: 0.55;
          filter: blur(2px);
          animation: floatBlob 9s ease-in-out infinite;
        }
        .hero-blob.b2 {
          animation-duration: 11s;
          animation-delay: -3s;
        }
        @keyframes floatBlob {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(18px, -22px) scale(1.06); }
          66%  { transform: translate(-14px, 14px) scale(0.96); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .photo-slot {
          position: relative;
          min-height: 380px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .photo-slot img {
          position: relative;
          z-index: 2;
          max-width: 100%;
          max-height: 460px;
          object-fit: contain;
          filter: drop-shadow(0 18px 30px rgba(44,46,82,0.18));
        }
        .photo-slot .placeholder {
          position: relative;
          z-index: 2;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 3px dashed #C9A17A;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: 'Caveat', cursive;
          font-size: 1.3rem;
          color: var(--brown);
          background: rgba(255,255,255,0.4);
          padding: 1rem;
          animation: floatSoft 5s ease-in-out infinite;
        }
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .title-word {
          font-weight: 800;
          color: var(--coral);
          line-height: 0.92;
          font-size: clamp(3.2rem, 9vw, 6rem);
          text-shadow: 4px 4px 0 rgba(44,46,82,0.08);
          display: inline-block;
          opacity: 0;
          transform: translateY(40px) rotate(-6deg);
          animation: wordIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .title-word.tilt {
          animation-delay: 0.05s;
        }
        .title-word.word2 {
          animation-delay: 0.28s;
        }
        @keyframes wordIn {
          0% {
            opacity: 0;
            transform: translateY(40px) rotate(-6deg) scale(0.85);
          }
          60% {
            opacity: 1;
            transform: translateY(-6px) rotate(1deg) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(-3deg) scale(1);
          }
        }
        .title-word.word2 {
          animation-name: wordIn2;
        }
        @keyframes wordIn2 {
          0% {
            opacity: 0;
            transform: translateY(40px) rotate(4deg) scale(0.85);
          }
          60% {
            opacity: 1;
            transform: translateY(-6px) rotate(-1deg) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }
        .hand-in {
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
        }
        .squiggle-in {
          opacity: 0;
          transform: scaleX(0.6);
          transform-origin: left;
          animation: squiggleIn 0.6s ease forwards;
          animation-delay: 0.55s;
        }
        .fade-in-1 { opacity: 0; animation: fadeUp 0.6s ease forwards; animation-delay: 0.65s; }
        .fade-in-2 { opacity: 0; animation: fadeUp 0.6s ease forwards; animation-delay: 0.8s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes squiggleIn {
          from { opacity: 0; transform: scaleX(0.6); }
          to   { opacity: 1; transform: scaleX(1); }
        }
        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.5rem;
        }
        .badge {
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          background: var(--paper);
          color: var(--navy);
          border: 2px solid var(--navy);
        }
        @media (max-width: 800px) {
          .hero-inner { grid-template-columns: 1fr; }
          .photo-slot { order: -1; min-height: 280px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-blob, .photo-slot .placeholder, .title-word,
          .hand-in, .squiggle-in, .fade-in-1, .fade-in-2 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="hero-blob" style={{ width: 260, height: 260, top: -60, right: -60 }} />
      <div className="hero-blob b2" style={{ width: 160, height: 160, bottom: 20, left: -50 }} />

      <div className="hero-inner">
        <div>
          <span className="hand hand-in" style={{ fontSize: '1.6rem', color: 'var(--brown)' }}>
            halo, perkenalkan
          </span>
          <div style={{ marginTop: '0.25rem' }}>
            <span className="title-word tilt">PORT</span>
            <br />
            <span className="title-word word2" style={{ marginLeft: '0.4em' }}>FOLIO</span>
          </div>
          <div className="squiggle-in">
            <Squiggle />
          </div>
          <p className="fade-in-1" style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--navy)', marginTop: '0.75rem' }}>
            Operator Produksi / Pengembang Aplikasi / Pencerita
          </p>
          <div className="badge-row fade-in-2">
            <span className="badge">Manufaktur</span>
            <span className="badge">Pengembangan Aplikasi</span>
            <span className="badge">Konten &amp; Refleksi</span>
          </div>
        </div>

        <div className="photo-slot">
          <img src={foto} alt="Ramdani" />
        </div>
      </div>
    </header>
  );
}
