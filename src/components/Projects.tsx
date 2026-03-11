import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  details: string[]
  images: string[]
  tech: { name: string; color: string }[]
  demo: string
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeImage, setActiveImage] = useState(0)

  const projects: Project[] = [
    {
      title: 'Meg Restaurante',
      description:
        'Site completo para restaurante com cardápio semanal dinâmico, sistema de pedidos online e integração com WhatsApp.',
      details: [
        'Cardápio semanal dinâmico com pratos do dia e acompanhamentos',
        'Sistema de pedidos online com seleção de tamanho e proteína',
        'Galeria de fotos e depoimentos de clientes',
        'Integração direta com WhatsApp para pedidos',
        'Design responsivo e otimizado para performance',
      ],
      images: ['/imgs/Restaurante.webp', '/imgs/1Restaurante.webp'],
      tech: [
        { name: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
        { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
        { name: 'Tailwind CSS', color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
        { name: 'Vite', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      ],
      demo: 'https://www.omegrestaurante.com.br/',
    },
    {
      title: 'Hunts Marketing',
      description:
        'Landing page profissional para agência de marketing digital com design dark moderno e CTA de conversão.',
      details: [
        'Design dark premium com identidade visual da marca',
        'Seções de serviços, processo e FAQ interativas',
        'Animações suaves com Framer Motion',
        'CTA estratégico para conversão de leads',
        'Integração com WhatsApp e formulário de contato',
      ],
      images: ['/imgs/Huntsmarkenting.webp', '/imgs/HuntsMarrketing.webp'],
      tech: [
        { name: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
        { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
        { name: 'Tailwind CSS', color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
        { name: 'Radix UI', color: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
      ],
      demo: 'https://www.huntsmarketing.com.br/',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-50 flex items-center gap-3 sm:gap-4">
            <span className="text-primary-500 font-mono text-lg sm:text-xl md:text-2xl">
              03.
            </span>
            Projetos em Destaque
            <div className="hidden md:block h-px flex-1 bg-dark-800 ml-4"></div>
          </h2>
        </motion.div>

        {/* Projects Grid - 2 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => { setSelectedProject(project); setActiveImage(0) }}
              className="relative bg-dark-900 border border-dark-800 rounded-lg overflow-hidden group hover:border-primary-500/50 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] transition-all duration-300 cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 z-0"
              />

              {/* Project Image */}
              <div className="relative h-52 sm:h-56 bg-dark-800 flex items-center justify-center overflow-hidden">
                <span className="absolute top-3 right-3 z-20 px-2 py-0.5 text-[10px] sm:text-xs font-bold rounded bg-primary-500/90 text-white">
                  Cliente
                </span>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="relative p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 z-10">
                <h3 className="text-lg sm:text-xl font-bold text-dark-50 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md border ${tech.color} font-medium`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Click hint */}
                <p className="text-dark-500 text-[10px] sm:text-xs flex items-center gap-1 pt-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Clique para ver detalhes
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 origin-left"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://github.com/KairoHenriqueTI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 overflow-hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <span className="relative z-10">Ver Mais no GitHub</span>
            <motion.svg
              className="w-5 h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[90vw] xl:max-w-6xl max-h-[92vh] overflow-y-auto bg-dark-900 border border-dark-700 rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-dark-900/80 border border-dark-700 text-dark-300 hover:text-white hover:bg-dark-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Image Slider - Left (2/3) */}
                <div className="lg:col-span-2 relative bg-dark-950 overflow-hidden rounded-tl-xl rounded-bl-xl">
                  <div className="relative h-80 sm:h-[28rem] lg:h-[600px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImage}
                        src={selectedProject.images[activeImage]}
                        alt={`${selectedProject.title} - ${activeImage + 1}`}
                        className="w-full h-full object-contain bg-dark-950"
                        style={{ willChange: 'transform, opacity' }}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.25 }}
                      />
                    </AnimatePresence>

                    {/* Slide arrows */}
                    <button
                      onClick={() => setActiveImage(activeImage === 0 ? selectedProject.images.length - 1 : activeImage - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-dark-900/80 border border-dark-700 text-white hover:bg-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setActiveImage(activeImage === selectedProject.images.length - 1 ? 0 : activeImage + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-dark-900/80 border border-dark-700 text-white hover:bg-primary-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5">
                      {selectedProject.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            i === activeImage ? 'bg-primary-500 w-8' : 'bg-white/30 w-2.5 hover:bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content - Right (1/3) */}
                <div className="lg:col-span-1 p-5 sm:p-6 lg:p-7 space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-dark-50">
                      {selectedProject.title}
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-primary-500/20 text-primary-400 border border-primary-500/30">
                      Cliente
                    </span>
                  </div>

                  <p className="text-dark-400 text-xs leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1.5">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-dark-300 text-[11px]">
                        <svg className="w-3 h-3 mt-0.5 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 text-[10px] rounded-md border ${tech.color} font-medium`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 w-fit"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visitar Site
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
