import React from 'react';

const projects = [
  {
    num: '01',
    name: 'DAWA',
    tag: 'Bisnis & Produk',
    desc: 'Minuman & camilan herbal khas Indonesia, dari produksi sampai ke tangan pelanggan di area Bekasi.',
    details: ['Manajemen produksi & stok', 'Laporan penjualan & analisis biaya', 'Riset HPP bahan baku'],
  },
  {
    num: '02',
    name: 'DAWA Kasir',
    tag: 'Aplikasi PWA',
    desc: 'Aplikasi kasir buatan sendiri untuk operasional DAWA sehari-hari.',
    details: ['Manajemen pesanan & pembayaran', 'Laporan otomatis ke PDF', 'UI v2 terinspirasi POS profesional'],
  },
  {
    num: '03',
    name: 'Stock Opname App',
    tag: 'Aplikasi PWA',
    desc: 'Sistem pelacakan stok untuk 25 bahan baku dan 13 menu minuman, lengkap dengan jejak audit.',
    details: ['Auto-deduction berbasis resep', 'Pelacakan barang rusak/kadaluarsa', 'Koreksi manual dengan riwayat'],
  },
  {
    num: '04',
    name: 'jurnalRamdani',
    tag: 'Konten & Refleksi',
    desc: 'Ruang menulis dan berbagi lewat video — tentang proses, ketenangan, dan pertumbuhan yang tidak terburu-buru.',
    details: ['Konten reflektif di YouTube & Instagram', 'Beberapa ebook (Monozukuri, Shu-Ha-Ri, dll)', 'Tracker produksi video sendiri'],
  },
];

export default function Projects() {
  return (
    <section style={{ background: 'var(--cream)', padding: '4.5rem 1.5rem' }}>
      <style>{`
        .proj-header {
          max-width: 1000px;
          margin: 0 auto 2.5rem;
        }
        .proj-title {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: var(--navy);
        }
        .proj-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem 2.5rem;
        }
        .proj-card { position: relative; }
        .proj-num {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 800;
          font-size: 3rem;
          color: var(--coral);
          line-height: 1;
        }
        .proj-name {
          font-family: 'Baloo 2', sans-serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: var(--navy);
          margin: 0.5rem 0 0.2rem;
        }
        .proj-tag {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--brown);
        }
        .proj-desc {
          color: var(--brown);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0.7rem 0;
        }
        .proj-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .proj-details li {
          font-size: 0.88rem;
          color: var(--navy);
          padding: 0.25rem 0;
          padding-left: 1rem;
          position: relative;
        }
        .proj-details li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--coral);
        }
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="proj-header">
        <span className="hand" style={{ fontSize: '1.3rem', color: 'var(--coral)' }}>yang sudah saya bangun</span>
        <h2 className="proj-title">Proyek</h2>
      </div>

      <div className="proj-grid">
        {projects.map((p) => (
          <div className="proj-card" key={p.num}>
            <span className="proj-num">{p.num}</span>
            <div className="proj-name">{p.name}</div>
            <span className="proj-tag">{p.tag}</span>
            <p className="proj-desc">{p.desc}</p>
            <ul className="proj-details">
              {p.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
