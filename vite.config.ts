// vite.config.ts (или .js — оба ок)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  base: mode === 'production' ? '/bento-dashboard/' : '/',

  server: {
    open: true,
  },

  build: {
    sourcemap: mode === 'development',
  },
}))