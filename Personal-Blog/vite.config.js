import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['..', 'node_modules/devicon']
    }
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
  build: {
    outDir: 'dist', // Explicitly set output directory
    assetsDir: 'assets' // Organize assets in subfolder
  }
})