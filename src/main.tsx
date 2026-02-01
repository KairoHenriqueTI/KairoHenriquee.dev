import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Try to dynamically load the virtual PWA register helper only when available.
// Use `new Function` to avoid bundlers trying to statically resolve the import
// when the plugin is disabled.
async function tryRegisterSW() {
  try {
    // eslint-disable-next-line no-new-func
    const loader = new Function('return import("virtual:pwa-register")')
    const mod = await loader()
    return mod.registerSW
  } catch {
    return null
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Register service worker for PWA updates / offline support (if available)
;(async () => {
  const register = await tryRegisterSW()
  if (!register) return
  const updateSW = register({
    onNeedRefresh() {
      if (confirm('Há uma nova versão. Atualizar agora?')) updateSW && updateSW(true)
    },
    onOfflineReady() {
      console.log('Aplicativo pronto para uso offline.')
    }
  })
})()
