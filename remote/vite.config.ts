import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: 'remote',
      manifest: true,
      exposes: {
        './export-app': './src/export-app',
      },
      shared: {
        vue: { singleton: true },
        'vue-router': { singleton: true },
      },
    }),
  ],
  server: {
    origin: 'http://localhost:2000',
    port: 2000,
    strictPort: true,
  },
  preview: {
    port: 2000,
    strictPort: true,
  },
  base: 'http://localhost:2000',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
