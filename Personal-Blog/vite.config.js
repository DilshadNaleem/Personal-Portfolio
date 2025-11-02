import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   server: {
    fs: {
      allow: ['..', 'node_modules/devicon'] // Allow devicon fonts
    },
    server: {
      historyApiFallback: true
    }
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2']
})
