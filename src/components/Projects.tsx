import { motion } from 'framer-motion'
import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Sistema de Gerenciamento',
      description:
        'Sistema completo de gerenciamento com autenticação, CRUD de usuários e painel administrativo. Desenvolvido com arquitetura REST e práticas de Clean Code.',
      image: '🚀',
      tech: [
        { name: 'Java', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
        { name: 'Spring Boot', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
        { name: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
        { name: 'MySQL', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
        { name: 'Docker', color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
      ],
      github: 'https://github.com/Noclipssz',
      demo: null,
    },
    {
      title: 'API RESTful',
      description:
        'API RESTful robusta com documentação Swagger, testes automatizados e deploy em container Docker. Implementa boas práticas de segurança e versionamento.',
      image: '⚡',
      tech: [
        { name: 'Python', color: 'bg-blue-600/20 text-blue-400 border-blue-600/30' },
        { name: 'Docker', color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
        { name: 'PostgreSQL', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
        { name: 'AWS', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
      ],
      github: 'https://github.com/Noclipssz',
      demo: null,
    },
    {
      title: 'Dashboard Interativo',
      description:
        'Dashboard moderno e responsivo com gráficos interativos, filtros avançados e atualização em tempo real. Interface intuitiva construída com foco na experiência do usuário.',
      image: '🎨',
      tech: [
        { name: 'Vue.js', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
        { name: 'Laravel', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
        { name: 'Tailwind', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
        { name: 'MySQL', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      ],
      github: 'https://github.com/Noclipssz',
      demo: null,
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
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-50 flex items-center gap-4">
            <span className="text-primary-500 font-mono text-xl md:text-2xl">
              03.
            </span>
            Projetos em Destaque
            <div className="hidden md:block h-px flex-1 bg-dark-800 ml-4"></div>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative bg-dark-900 border border-dark-800 rounded-lg overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 z-0"
              />

              {/* Project Image */}
              <div className="relative h-48 bg-dark-800 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredProject === index ? 1.1 : 1,
                    rotate: hoveredProject === index ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl"
                >
                  {project.image}
                </motion.div>

                {/* Animated circles background */}
                <motion.div
                  animate={{
                    scale: hoveredProject === index ? 1.2 : 0.8,
                    opacity: hoveredProject === index ? 0.2 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full blur-2xl"
                />
              </div>

              {/* Project Content */}
              <div className="relative p-6 space-y-4 z-10">
                <h3 className="text-xl font-bold text-dark-50 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1 text-xs rounded-md border ${tech.color} font-medium cursor-pointer`}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>

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
            href="https://github.com/Noclipssz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white font-medium rounded-lg transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer effect */}
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
    </section>
  )
}

export default Projects
