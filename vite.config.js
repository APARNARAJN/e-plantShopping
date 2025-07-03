import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/e-plantShopping/",  // ✅ this must match the GitHub repo name exactly
  plugins: [react()],
})
