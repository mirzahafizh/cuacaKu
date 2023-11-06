import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      // ... Konfigurasi alias lainnya ...
    },
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  },
});

