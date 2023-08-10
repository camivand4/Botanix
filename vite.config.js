import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Add MIME type configuration for JavaScript modules
    mimeTypes: {
      'js': 'application/javascript; charset=utf-8',
    },
    proxy: {
      '/api': {
        target: 'https://13.53.41.118',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/devices')
      }
    }
  },
});
