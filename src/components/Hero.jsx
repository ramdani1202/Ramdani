import React, { useState, useEffect, useRef } from 'react';

function CloudShape() {
  return (
    <svg viewBox="0 0 200 100" width="100%" style={{ display: 'block' }}>
      <ellipse cx="60" cy="60" rx="55" ry="32" fill="white" />
      <ellipse cx="110" cy="45" rx="45" ry="38" fill="white" />
      <ellipse cx="150" cy="62" rx="40" ry="28" fill="white" />
      <ellipse cx="40" cy="70" rx="35" ry="22" fill="white" />
    </svg>
  );
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => {
      if (containerRef.current) {
        setMaxScroll(containerRef.current.offsetHeight - window.innerHeight);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

  const text = 'PORTFOLIO';
  const letters = text.split('');

  const waveOpacity = Math.max(1 - progress * 2.2, 0);
  const waveTranslateUp = progress * 120;

  const nameProgress = Math.min(Math.max((progress - 0.35) / 0.65, 0), 1);
  const nameTranslateY = (1 - nameProgress) * -300;
  const nameOpacity = nameProgress;

  const skyShift = progress * 15;

  return (
    <div ref={containerRef} className="hero-scroll-track">
      <style>{`
        @keyframes waveMove {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes drift1 {
          0%   { transform: translateX(0px); }
          100% { transform: translateX(60px); }
        }
        @keyframes drift2 {
          0%   { transform: translateX(0px); }
          100% { transform: translateX(-40px); }
        }
        .hero-scroll-track {
          height: 250vh;
          position: relative;
        }
        .wave-letter {
          display: inline-block;
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          animation: waveMove 1.8s ease-in-out infinite;
        }
        .cloud {
          position: absolute;
          opacity: 0.9;
        }
        @media (prefers-reduced-motion: reduce) {
          .wave-letter { animation: none; }
          .cloud { animation: none !important; }
        }
      `}</style>

      <div
        className="hero-sticky"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: `linear-gradient(180deg,
            hsl(${205 - skyShift}, 85%, ${68 - progress * 10}%) 0%,
            hsl(${200 - skyShift}, 80%, ${78 - progress * 8}%) 45%,
            hsl(${45 + progress * 10}, 70%, ${90 - progress * 5}%) 100%)`,
        }}
      >
        <div className="cloud" style={{ top: '12%', left: '5%', width: 160, animation: 'drift1 14s ease-in-out infinite alternate', opacity: 0.95 - progress * 0.5 }}>
          <CloudShape />
        </div>
        <div className="cloud" style={{ top: '22%', left: '60%', width: 120, animation: 'drift2 18s ease-in-out infinite alternate', opacity: 0.9 - progress * 0.5 }}>
          <CloudShape />
        </div>
        <div className="cloud" style={{ top: '8%', left: '75%', width: 100, animation: 'drift1 22s ease-in-out infinite alternate', opacity: 0.85 - progress * 0.5 }}>
          <CloudShape />
        </div>
        <div className="cloud" style={{ top: '35%', left: '20%', width: 90, animation: 'drift2 16s ease-in-out infinite alternate', opacity: 0.8 - progress * 0.5 }}>
          <CloudShape />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '42%',
            left: '50%',
            transform: `translate(-50%, calc(-50% - ${waveTranslateUp}px))`,
            opacity: waveOpacity,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            padding: '0 1rem',
            pointerEvents: 'none',
          }}
        >
          {letters.map((letter, i) => (
            <span
              key={i}
              className="wave-letter"
              style={{
                animationDelay: `${i * 0.12}s`,
                fontSize: 'clamp(2rem, 7vw, 5rem)',
                color: '#2E5D8A',
                textShadow: '3px 3px 0px rgba(255,255,255,0.55)',
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, calc(-50% + ${nameTranslateY}px))`,
            opacity: nameOpacity,
            textAlign: 'center',
            width: '100%',
            pointerEvents: 'none',
          }}
        >
          <h1
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              color: '#3A2E1F',
              margin: 0,
              textShadow: '4px 4px 0px rgba(255,255,255,0.5)',
              letterSpacing: '1px',
            }}
          >
            Ramdani
          </h1>
          <p
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              color: '#5A4A38',
              marginTop: '0.5rem',
            }}
          >
            terus melangkah, satu proses pada satu waktu
          </p>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: Math.max(1 - progress * 3, 0),
            color: '#2E5D8A',
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 600,
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          ↓ geser ke bawah ↓
        </div>
      </div>
    </div>
  );
}
