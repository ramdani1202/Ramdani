import React from 'react';

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
        }
        .title-word {
          font-weight: 800;
          color: var(--coral);
          line-height: 0.92;
          font-size: clamp(3.2rem, 9vw, 6rem);
          text-shadow: 4px 4px 0 rgba(44,46,82,0.08);
        }
        .title-word.tilt {
          transform: rotate(-3deg);
          display: inline-block;
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
      `}</style>

      <div className="hero-blob" style={{ width: 260, height: 260, top: -60, right: -60 }} />
      <div className="hero-blob" style={{ width: 160, height: 160, bottom: 20, left: -50 }} />

      <div className="hero-inner">
        <div>
          <span className="hand" style={{ fontSize: '1.6rem', color: 'var(--brown)' }}>
            halo, perkenalkan
          </span>
          <div style={{ marginTop: '0.25rem' }}>
            <span className="title-word tilt">PORT</span>
            <br />
            <span className="title-word" style={{ marginLeft: '0.4em' }}>FOLIO</span>
          </div>
          <Squiggle />
          <p style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--navy)', marginTop: '0.75rem' }}>
            Operator Produksi / Pengembang Aplikasi / Pencerita
          </p>
          <div className="badge-row">
            <span className="badge">Manufaktur</span>
            <span className="badge">Pengembangan Aplikasi</span>
            <span className="badge">Konten &amp; Refleksi</span>
          </div>
        </div>

        <div className="photo-slot">
          {/* Ganti src di bawah ini dengan foto PNG transparan kamu, taruh di src/assets/ */}
          <div className="placeholder">
            taruh foto PNG<br />transparan kamu<br />di sini ✨
          </div>
        </div>
      </div>
    </header>
  );
}
