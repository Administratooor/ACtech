import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'ACtech', // Remplacez <nom-du-dépôt> par le nom de votre dépôt GitHub
})