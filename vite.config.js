import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // MUST match your repo name!
  build: {
    outDir: 'dist',
  },
});