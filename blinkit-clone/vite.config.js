import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'a68f-2405-201-5c0c-a879-8c73-876e-c635-bc2a.ngrok-free.app'
    ]
  }
})
