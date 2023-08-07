import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Add MIME type configuration for JavaScript modules
    mimeTypes: {
      'js': 'application/javascript; charset=utf-8',
    },
  },
});
