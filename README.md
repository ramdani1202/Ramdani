# Portfolio Ramdani

Website portfolio pribadi, dibangun dengan React + Vite.

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Struktur

```
src/
├── main.jsx          — entry point
├── App.jsx           — merangkai semua section
├── index.css         — style dasar
└── components/
    ├── Hero.jsx       — langit, teks ombak "PORTFOLIO", nama jatuh
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    └── Contact.jsx
```

## Cara online-kan lewat GitHub Pages

1. Buat repo baru di GitHub, misalnya bernama `portfolio`.
2. **Penting**: buka `vite.config.js`, ganti `base: '/portfolio/'` sesuai nama repo kamu.
   Contoh: kalau repo bernama `situs-ramdani`, ubah jadi `base: '/situs-ramdani/'`.
3. Push semua file ini ke repo:
   ```bash
   git init
   git add .
   git commit -m "Portfolio pertama"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
4. Di GitHub: buka repo → **Settings** → **Pages** → bagian "Build and deployment" → pilih source **GitHub Actions**.
5. Selesai. Workflow di `.github/workflows/deploy.yml` akan otomatis build & deploy setiap kamu `git push` ke branch `main`.
6. Situs akan online di: `https://USERNAME.github.io/NAMA-REPO/`

Setiap kali kamu update konten (misalnya edit `Projects.jsx`) dan push ke GitHub, situs otomatis ter-update dalam 1–2 menit — tidak ada yang tersimpan di local storage, semuanya online.

## Yang perlu kamu ganti manual

- `src/components/Contact.jsx` — ganti email placeholder dengan email/kontak asli kamu
- `index.html` — bisa ganti title/deskripsi kalau perlu
