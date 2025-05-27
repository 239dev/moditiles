import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/', // Ensures assets are loaded from the root path
  build: {
    outDir: 'dist', // Explicitly set build output directory
    assetsDir: 'assets', // Organize assets in a dedicated directory
  },
});
