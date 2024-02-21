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
        guide: "guide.html",
        en: "index_en.html",
        privacyEn: "privacy_en.html",
        guideEn: "guide_en.html",
        privacyEmoji: "privacy_emoji.html",
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
