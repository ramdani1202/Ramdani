import React, { useState, useEffect, useRef } from 'react';

function CloudShape({ style }) {
  return (
    <svg viewBox="0 0 200 100" width="100%" style={{ display: 'block', ...style }}>
      <ellipse cx="60" cy="60" rx="55" ry="32" fill="white" />
      <ellipse cx="110" cy="45" rx="45" ry="38" fill="white" />
      <ellipse cx="150" cy="62" rx="40" ry="28" fill="white" />
      <ellipse cx="40" cy="70" rx="35" ry="22" fill="white" />
    </svg>
  );
}

export default function AboutIntro() {
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

  const top = containerRef.current ? containerRef.current.offsetTop : 0;
  const localScroll = scrollY - top;
  const progress = Math.min(Math.max(localScroll / maxScroll, 0), 1);

  const p1 = Math.min(Math.max(progress / 0.4, 0), 1);
  const p2 = Math.min(Math.max((progress - 0.35) / 0.4, 0), 1);
  const p3 = Math.min(Math.max((progress - 0.7) / 0.3, 0), 1);

  const nameOpacity = p1;
  const nameBlur = (1 - p1) * 5;
  const cloudDrift = p1 * 45;

  const seaTranslateY = (1 - p2) * 100;
  const paperOpacity = p3;

  return (
    <div ref={containerRef} style={{ height: '220vh', position: 'relative' }}>
      <style>{`
        @keyframes seaDrift2 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .sea-layer-2 {
          animation: seaDrift2 15s linear infinite;
          width: 200%;
        }
        @media (prefers-reduced-motion: reduce) {
          .sea-layer-2 { animation: none; }
        }
      `}</style>

      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: `linear-gradient(180deg,
            hsl(20, 75%, 62%) 0%,
            hsl(28, 80%, 70%) 45%,
            hsl(38, 85%, 80%) 100%)`,
        }}
      >
        <div style={{ position: 'absolute', top: '38%', left: '50%', width: 240, transform: `translate(calc(-100% - ${cloudDrift}px), -50%)`, opacity: 0.95, zIndex: 3 }}>
          <CloudShape style={{ filter: 'sepia(0.3) saturate(1.3)' }} />
        </div>
        <div style={{ position: 'absolute', top: '40%', left: '50%', width: 240, transform: `translate(${cloudDrift}px, -50%)`, opacity: 0.95, zIndex: 3 }}>
          <CloudShape style={{ filter: 'sepia(0.3) saturate(1.3)' }} />
        </div>
        <div style={{ position: 'absolute', top: '12%', left: '15%', width: 120, opacity: 0.8, zIndex: 1 }}>
          <CloudShape style={{ filter: 'sepia(0.3) saturate(1.3)' }} />
        </div>
        <div style={{ position: 'absolute', top: '18%', left: '68%', width: 110, opacity: 0.75, zIndex: 1 }}>
          <CloudShape style={{ filter: 'sepia(0.3) saturate(1.3)' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '39%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: nameOpacity,
            filter: `blur(${nameBlur}px)`,
            textAlign: 'center',
            width: '100%',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontFamily: "'Baloo 2', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              color: '#4A2A1A',
              margin: 0,
              textShadow: '3px 3px 0px rgba(255,255,255,0.4)',
            }}
          >
            Ramdani
          </h2>
        </div>

        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            transform: `translateY(${seaTranslateY}%)`,
            zIndex: 6,
            lineHeight: 0,
          }}
        >
          <svg
            viewBox="0 0 2400 200"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '90px' }}
          >
            <path
              className="sea-layer-2"
              d="M0,100 C200,150 400,50 600,100 C800,150 1000,50 1200,100
                 C1400,150 1600,50 1800,100 C2000,150 2200,50 2400,100
                 L2400,200 L0,200 Z"
              fill="#2E6FB8"
              opacity="0.9"
            />
          </svg>
          <div style={{ background: '#1E5FA8', height: 'calc(100vh - 70px)', marginTop: '-2px' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#F2EDE4',
            opacity: paperOpacity,
            zIndex: 7,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
