import React from 'react';

export default function Contact() {
  return (
    <section
      style={{
        background: '#2E2A26',
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
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
          Arsip — Kontak
        </span>
        <h2
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: '#F2EDE4',
            margin: '0.75rem 0 1.5rem',
          }}
        >
          Mari terhubung
        </h2>
        <p style={{ color: '#C9C2B4', lineHeight: 1.7, marginBottom: '2rem' }}>
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
            color: '#2E2A26',
            background: '#C9A961',
            padding: '0.85rem 2rem',
            borderRadius: '999px',
            textDecoration: 'none',
          }}
        >
          Kirim Email
        </a>
      </div>
      <p style={{ color: '#6B6255', fontSize: '0.85rem', marginTop: '3rem' }}>
        © {new Date().getFullYear()} Ramdani. Dibangun satu langkah pada satu waktu.
      </p>
    </section>
  );
}
