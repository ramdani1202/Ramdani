# Ramdani — Web Portfolio

Portfolio pribadi React + Vite, dibangun **sesuai isi PDF brief**:
struktur folder, urutan section, warna, dan gaya font mengikuti
persis apa yang tertulis di mind map.

## Struktur folder (sesuai PDF)

```
myportfolio/
├── .github/workflows/deploy.yml   # auto-deploy ke GitHub Pages
├── public/
│   └── favicon.svg
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── Profile.js       # nama, bio, foto, kontak
    │   ├── Skills.js        # skill per kategori + work principle
    │   └── Project.js       # daftar project
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Project.jsx
    │   └── Contact.jsx
    ├── assets/
    │   ├── components/       # (folder cadangan sesuai catatan PDF)
    │   ├── hooks/             # (folder cadangan sesuai catatan PDF)
    │   └── images/
    │       ├── Profil/        # taruh foto profil di sini
    │       ├── Project/       # taruh foto project di sini
    │       ├── Icons/
    │       └── Partisi/
    └── Layout/
        ├── Sections/          # (folder cadangan sesuai catatan PDF)
        ├── Ui/                # (folder cadangan sesuai catatan PDF)
        └── Effects/           # (folder cadangan sesuai catatan PDF)
```

> Catatan jujur soal 1 hal: PDF menulis `App.jsx` dan `main.jsx` di
> dalam `src/data/`. Itu saya taruh di `src/` (bukan `src/data/`)
> karena React/Vite **tidak akan bisa jalan** kalau entry file ada di
> situ — folder `data/` di React selalu berarti "tempat data mentah",
> bukan entry aplikasi. Kalau ini keliru baca maksudmu, kasih tahu,
> saya sesuaikan lagi.

## Warna (diambil langsung dari sampel warna asli di PDF)

| Nama di PDF | Kode warna |
|---|---|
| Warna domain (background halaman) | `#F9F8F4` |
| Warna background | `#D8E0A4` (sage/olive) |
| Warna aksen primary | `#1A485F` (navy) |
| Warna text | `#1A485F` (navy) |

## Gaya font & visual

- **Gaya font**: kondensed, tebal, huruf besar — mengikuti referensi
  logo "CREATE" di PDF (pakai Anton).
- **Gaya visual / Light theme**: tema terang, hero dengan foto orang
  overlay di belakang judul nama besar, badge kecil "Freelance
  Projects", tombol pill dengan panah — mengikuti 3 referensi visual
  di PDF (style "of Semaan / CREATE").

## Urutan section (sesuai PDF: "Sections, urutan: 1.Hero 2.About 3.Pr...")

1. Hero
2. About
3. Project

Skills dan Contact ditambahkan sebagai pelengkap karena isinya
(daftar skill, kontak LinkedIn/WhatsApp/Instagram) sudah eksplisit
diminta di brief, meski urutan section lengkapnya terpotong di PDF.

## Cara pakai

```bash
cd myportfolio
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Yang perlu kamu isi sendiri

1. **Foto profil** — buka `src/data/Profile.js`, ganti `photo: null`
   jadi path foto (taruh file di `src/assets/images/Profil/`).
2. **Isi project** — buka `src/data/Project.js`, ganti judul,
   deskripsi, tech, tantangan/solusi, gambar (taruh di
   `src/assets/images/Project/`), dan link tiap project.

## Upload manual dari HP ke GitHub + auto-deploy (sesuai catatan PDF)

Catatan PDF: *"project ini saya upload ke github dengan manual
menggunakan hp, kayaknya harus ditambah `.github` biar bisa deploy,
berbasis web saja, tapi ketika ada perubahan di file-file tersebut
langsung update otomatis tanpa harus hapus cache Chrome manual, dan
tanpa edit version di vite.config.js."*

Sudah disiapkan di project ini:

1. **Folder `.github/workflows/deploy.yml`** — begitu kamu push
   project ini ke GitHub (bisa dari aplikasi GitHub di HP, fitur
   "upload file" di web GitHub versi mobile, atau app seperti
   Working Copy/Termux), GitHub Actions otomatis build dan deploy ke
   **GitHub Pages** tanpa kamu perlu klik apa-apa lagi.
2. **`vite.config.js`** — setiap build otomatis memberi nama file
   baru (hash unik), jadi Chrome **wajib** ambil file terbaru,
   tanpa perlu hapus cache manual dan tanpa kamu perlu mengedit
   angka versi apapun di file config.

### Langkah aktivasi GitHub Pages (sekali saja, lewat HP juga bisa)

1. Buat repo baru di GitHub, upload seluruh isi folder `myportfolio/`.
2. Buka repo → **Settings → Pages**.
3. Di bagian **Source**, pilih **GitHub Actions**.
4. Selesai. Setiap kamu push perubahan file apapun ke branch `main`,
   web otomatis ter-build ulang dan ter-deploy, dan pengunjung
   (termasuk kamu sendiri di Chrome) langsung melihat versi terbaru.
