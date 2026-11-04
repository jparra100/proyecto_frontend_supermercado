import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages publica el sitio en /nombre-del-repositorio/, no en la raíz
  base: '/proyecto_frontend_supermercado/',
  plugins: [react(), tailwindcss()],
})
