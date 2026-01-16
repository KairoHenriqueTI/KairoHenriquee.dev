import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy load heavy sections
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-primary-500">Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
