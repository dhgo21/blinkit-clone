import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '2d74-2405-201-5c0c-a879-41a7-ffbe-aec8-65d.ngrok-free.app'
    ]
  }
})
