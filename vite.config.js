import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfigurasi ini membuat setiap build otomatis punya nama file baru
// (hash unik dari isi file). Jadi kalau ada perubahan di file manapun,
// browser (termasuk Chrome) otomatis mengambil file yang baru --
// tidak perlu hapus cache manual, dan tidak perlu edit apapun di sini.
export default defineConfig({
  plugins: [react()],
  base: './Ramdani/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
