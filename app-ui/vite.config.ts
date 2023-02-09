import { fileURLToPath, URL } from 'node:url'
import fs from "fs";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

const serverHasCert = fs.existsSync(fileURLToPath(new URL('../cert/ca.pem', import.meta.url)))

function getEntries() {
  const list = fs.readdirSync('./entries');
  return list.map(filename => fileURLToPath(new URL('./entries/' + filename, import.meta.url)))
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()],
  build: {
    outDir: '../public',
    rollupOptions: {
      input: getEntries(),
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 1091,
    https: true,
    proxy: {
      '/api': {
        target: (serverHasCert ? 'https' : 'http') + '://0.0.0.0:2040',
        secure: false,
      }
    }
  }
})
