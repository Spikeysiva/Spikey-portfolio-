import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base keeps the build working on any static host or sub-path
// (GitHub Pages, Netlify, Vercel…). Routing is hash-based, so no server
// rewrites are needed.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
});
