import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
  },
  preview: {
    port: 5174,
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    federation({
      name: 'host',
      remotes: {
        remote: '@remote/http://localhost:2000/mf-manifest.json',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
