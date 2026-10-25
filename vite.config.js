import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site under /portfolio/; Railway (and local preview) serve it at the root.
// Override with BASE_PATH if you host it somewhere else.
const base =
  process.env.BASE_PATH ?? (process.env.RAILWAY_ENVIRONMENT_NAME ? '/' : '/portfolio/')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
})
