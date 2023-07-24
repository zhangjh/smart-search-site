import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  assetsInclude: ["**/*.mov", "**/*.png", "**/*.jpeg"],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        privacy: "privacy.html",
        guide: "guide.html"
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
