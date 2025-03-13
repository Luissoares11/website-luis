import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/website/',
});

// © 2025 Luis Soares. All rights reserved. 