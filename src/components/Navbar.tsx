import { useState, useEffect, useRef, useCallback } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const ticking = useRef(false)

  const updateScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
    const totalScroll = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScrollProgress(windowHeight > 0 ? totalScroll / windowHeight : 0)
    ticking.current = false
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScroll)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateScroll])

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-xl md:text-2xl font-bold font-mono group"
            onClick={handleLinkClick}
          >
            <span className="text-primary-500 group-hover:text-primary-400 transition-colors">
              &lt;
            </span>
            <span className="text-dark-50 group-hover:text-primary-400 transition-colors">
              Kairo
            </span>
            <span className="text-primary-500 group-hover:text-primary-400 transition-colors">
              /&gt;
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-dark-300 hover:text-primary-400 transition-colors text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-dark-50 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-dark-50 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-dark-50 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-dark-300 hover:text-primary-400 transition-colors font-medium"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-dark-800/20">
        <div 
          className="h-full bg-gradient-to-r from-primary-600 to-primary-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </nav>
  )
}

export default Navbar
