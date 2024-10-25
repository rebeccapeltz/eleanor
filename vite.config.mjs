import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    proxy: {
      "/.netlify/functions": "http://localhost:8888/.netlify/functions" // Replace with your backend server address
    }
  }
})
