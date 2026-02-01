import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ...(process.env.DISABLE_PWA === 'true'
      ? []
      : [
          VitePWA({
            registerType: 'autoUpdate',
            manifest: {
              name: 'Kairo Henrique | Portfolio',
              short_name: 'Kairo',
              start_url: '/',
              display: 'standalone',
              background_color: '#0ea5e9',
              theme_color: '#0ea5e9',
              icons: [
                { src: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
                { src: '/icons/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' }
              ]
            }
          })
        ])
  ],
})
