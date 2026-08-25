import React from 'react';

export default function Contact() {
  return (
    <section style={{ background: 'var(--navy)', padding: '4.5rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <span className="hand" style={{ fontSize: '1.4rem', color: 'var(--peach)' }}>ayo terhubung</span>
        <h2
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: 'var(--paper)',
            margin: '0.5rem 0 1.5rem',
          }}
        >
          Mari mengobrol
        </h2>
        <p style={{ color: '#C9C2E0', lineHeight: 1.7, marginBottom: '2rem' }}>
          Ganti bagian ini dengan email, Instagram, atau kontak lain yang
          ingin kamu tampilkan.
        </p>
        <a
          href="mailto:ramdani@example.com"
          style={{
            display: 'inline-block',
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--navy)',
            background: 'var(--coral)',
            padding: '0.85rem 2.2rem',
            borderRadius: '999px',
            textDecoration: 'none',
          }}
        >
          Kirim Email
        </a>
      </div>
      <p style={{ color: '#8A85B0', fontSize: '0.85rem', marginTop: '3rem' }}>
        © {new Date().getFullYear()} Ramdani. Dibangun satu langkah pada satu waktu.
      </p>
    </section>
  );
}
