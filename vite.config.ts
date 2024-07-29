import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
