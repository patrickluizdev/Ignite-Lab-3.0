import { defineConfig, InlineConfig } from 'vite';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ignite-lab-design-system/application-static/.',
  build: {
    outDir: 'static/application-static/.'
  }
})
