import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'

// Lazy load heavy sections and visual components to reduce initial bundle
const Hero = lazy(() => import('./components/Hero'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-80 flex items-center justify-center text-primary-500">Carregando...</div>}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div className="py-20 flex items-center justify-center text-primary-500">Carregando conteúdo...</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <WhatsAppButton />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
