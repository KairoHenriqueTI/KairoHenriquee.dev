import { motion } from 'framer-motion'
import { ReactIcon, NodeIcon, DockerIcon, AWSIcon } from './TechIcons'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] bg-primary-500/10 rounded-full blur-[80px] animate-pulse-slow"
          style={{ willChange: 'transform, opacity' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[25rem] h-[25rem] sm:w-[35rem] sm:h-[35rem] bg-indigo-500/10 rounded-full blur-[80px] animate-pulse-slow"
          style={{ willChange: 'transform, opacity', animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-primary-500 font-mono text-sm md:text-base tracking-wide"
            >
              Olá, eu sou
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-50 tracking-tight"
            >
              Kairo Henrique
            </motion.h1>
            <motion.div variants={itemVariants} className="relative inline-block">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold relative z-10">
                <span className="gradient-text bg-[length:200%_auto] animate-shimmer">
                  Full Stack Developer
                </span>
              </h2>
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 bg-dark-950 z-20"
              />
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-dark-300 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed"
            >
              <span className="text-2xl font-bold text-dark-50 block mb-2">
                "Do código ao servidor"
              </span>
              Especialista em construir soluções completas, unindo{' '}
              <strong className="text-primary-400">Desenvolvimento de Software</strong>{' '}
              e <strong className="text-primary-400">Infraestrutura</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-2.5 sm:px-8 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300"
              >
                Entrar em Contato
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <a
                href="https://github.com/Noclipssz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-800 hover:bg-primary-600 text-dark-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/kairohenrique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-800 hover:bg-primary-600 text-dark-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Orbit Container */}
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              
              {/* Outer Orbit Ring - Optimized CSS Animation */}
              <div 
                className="absolute w-full h-full rounded-full border border-dark-800/50 animate-spin-slow"
                style={{ willChange: 'transform' }}
              >
                {/* Orbiting Icons */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-dark-900 border border-dark-700 rounded-full p-2 flex items-center justify-center shadow-lg shadow-primary-500/20">
                  <ReactIcon className="w-full h-full text-cyan-400" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-dark-900 border border-dark-700 rounded-full p-2 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <NodeIcon className="w-full h-full text-green-500" />
                </div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-dark-900 border border-dark-700 rounded-full p-2 flex items-center justify-center shadow-lg shadow-sky-500/20">
                  <DockerIcon className="w-full h-full text-blue-500" />
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-dark-900 border border-dark-700 rounded-full p-2 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <AWSIcon className="w-full h-full text-orange-400" />
                </div>
              </div>

              {/* Inner Circle Glow - Reduced Blur for Performance */}
              <div 
                className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-primary-600 to-indigo-600 opacity-20 blur-2xl animate-pulse"
                style={{ willChange: 'opacity' }}
              ></div>
              
              {/* Main Avatar Circle - Optimized CSS Animation */}
              <div
                className="relative w-80 h-80 rounded-full border-2 border-dark-700 bg-dark-900/50 backdrop-blur-sm shadow-2xl overflow-hidden flex items-center justify-center group animate-float"
                style={{ willChange: 'transform' }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* 3D Illustration Placeholder */}
                <span className="text-9xl transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl filter hover:brightness-110">
                  👨‍💻
                </span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-dark-400">
            <span className="text-sm font-mono">Scroll</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
