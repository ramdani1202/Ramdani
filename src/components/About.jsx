import React from 'react';

export default function About() {
  return (
    <section
      style={{
        background: '#F2EDE4',
        padding: '5rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
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
