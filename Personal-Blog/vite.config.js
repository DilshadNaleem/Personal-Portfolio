import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['..', 'node_modules/devicon']
    },
    historyApiFallback: true
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2']
})