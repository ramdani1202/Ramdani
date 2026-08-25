import React from 'react';

const projects = [
  {
    name: 'DAWA',
    tag: 'Bisnis & Produk',
    desc: 'Minuman & camilan herbal khas Indonesia, dari produksi sampai ke tangan pelanggan di area Bekasi.',
    details: ['Manajemen produksi & stok', 'Laporan penjualan & analisis biaya', 'Riset HPP bahan baku'],
    color: '#8A6A4F',
  },
  {
    name: 'DAWA Kasir',
    tag: 'Aplikasi PWA',
    desc: 'Aplikasi kasir buatan sendiri untuk operasional DAWA sehari-hari.',
    details: ['Manajemen pesanan & pembayaran', 'Laporan otomatis ke PDF', 'UI v2 terinspirasi POS profesional'],
    color: '#4A5D50',
  },
  {
    name: 'Stock Opname App',
    tag: 'Aplikasi PWA',
    desc: 'Sistem pelacakan stok untuk 25 bahan baku dan 13 menu minuman, lengkap dengan jejak audit.',
    details: ['Auto-deduction berbasis resep', 'Pelacakan barang rusak/kadaluarsa', 'Koreksi manual dengan riwayat'],
    color: '#8A6A4F',
  },
  {
    name: 'jurnalRamdani',
    tag: 'Konten & Refleksi',
    desc: 'Ruang menulis dan berbagi lewat video — tentang proses, ketenangan, dan pertumbuhan yang tidak terburu-buru.',
    details: ['Konten reflektif di YouTube & Instagram', 'Beberapa ebook (Monozukuri, Shu-Ha-Ri, dll)', 'Tracker produksi video sendiri'],
    color: '#4A5D50',
  },
];

export default function Projects() {
  return (
    <section style={{ background: '#EFE7D8', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
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
          Arsip — Proyek
        </span>
        <h2
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: '#2E2A26',
            margin: '0.75rem 0 2.5rem',
          }}
        >
          Yang sudah saya bangun
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((p) => (
            <div
              key={p.name}
              style={{
                background: '#fff',
                borderRadius: '1.25rem',
                padding: '1.75rem 2rem',
                borderLeft: `6px solid ${p.color}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  alignItems: 'baseline',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Baloo 2', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    color: '#2E2A26',
                    margin: 0,
                  }}
                >
                  {p.name}
                </h3>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: p.color,
                    background: `${p.color}15`,
                    padding: '0.2rem 0.7rem',
                    borderRadius: '999px',
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <p style={{ color: '#4A443C', margin: '0.75rem 0 1rem', lineHeight: 1.6 }}>
                {p.desc}
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#6B6255' }}>
                {p.details.map((d) => (
                  <li key={d} style={{ marginBottom: '0.3rem', fontSize: '0.95rem' }}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
