import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'portfolio' di bawah dengan NAMA REPO GitHub kamu
// contoh: kalau repo-nya https://github.com/username/situs-ramdani
// maka base harus '/situs-ramdani/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
