import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        trabajos: resolve(__dirname, 'trabajos.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
      // glightbox solo en el bundle de trabajos
    },
  },
})
