import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/sproutly/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})