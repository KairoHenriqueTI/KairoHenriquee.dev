import { motion } from 'framer-motion'
import { useState } from 'react'

const ProjectPreview = ({ type }: { type: string }) => {
  const windowHeader = (
    <div className="flex gap-1.5 mb-3">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
    </div>
  )

  if (type === 'grid') {
    return (
      <div className="w-full h-full bg-dark-900 border border-dark-700 rounded-lg p-4 select-none overflow-hidden">
        {windowHeader}
        <div className="flex gap-3 h-full">
          {/* Sidebar */}
          <div className="w-1/4 h-32 bg-dark-800/50 rounded flex flex-col gap-2 p-2">
            <div className="w-full h-2 bg-dark-700 rounded-full"></div>
            <div className="w-2/3 h-2 bg-dark-700 rounded-full"></div>
            <div className="w-3/4 h-2 bg-dark-700 rounded-full"></div>
          </div>
          {/* Main Grid */}
          <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`rounded ${
                  i % 2 === 0 ? 'bg-primary-500/10' : 'bg-dark-800/50'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'chart') {
    return (
      <div className="w-full h-full bg-dark-900 border border-dark-700 rounded-lg p-4 select-none overflow-hidden">
        {windowHeader}
        <div className="flex flex-col h-full gap-3">
          <div className="flex justify-between items-end h-20 gap-2 px-2">
            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
              <div
                key={i}
                className="w-full bg-primary-500/20 hover:bg-primary-500/40 transition-colors rounded-t"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-full bg-dark-800 rounded-full"></div>
            <div className="h-2 w-2/3 bg-dark-800 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'terminal') {
    return (
      <div className="w-full h-full bg-dark-950 border border-dark-800 rounded-lg p-4 font-mono text-xs select-none overflow-hidden">
        {windowHeader}
        <div className="space-y-2 text-dark-300">
          <div className="flex gap-2">
             <span className="text-green-500">➜</span>
             <span className="text-blue-400">~/gym-backend</span>
             <span className="text-dark-400">git status</span>
          </div>
          <div className="text-dark-400 pl-4">On branch main</div>
          <div className="flex gap-2">
             <span className="text-green-500">➜</span>
             <span className="text-blue-400">~/gym-backend</span>
             <span className="text-dark-400">docker-compose up -d</span>
          </div>
           <div className="text-dark-500 pl-4">
             <div className="animate-pulse">[+] Running 3/3</div>
             <div> ⠿ Container db      Started</div>
             <div> ⠿ Container api     Started</div>
             <div> ⠿ Container redis   Started</div>
           </div>
        </div>
      </div>
    )
  }

  return null
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'GridFlow',
      description:
        'Meu projeto piloto. Um sistema web robusto para escolas que automatiza a geração e gestão de grades de horários, garantindo eficiência no planejamento acadêmico.',
      type: 'grid',
      tech: [
        { name: 'Laravel', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
        { name: 'PHP', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
        { name: 'Blade', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
        { name: 'Docker', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
      ],
      github: 'https://github.com/Noclipssz/GridFlow--',
      demo: null,
    },
    {
      title: 'FinanceTracker Pro',
      description:
        'Controle completo de finanças pessoais com dashboard interativo, gráficos de despesas vs. receitas e persistência local de dados. Interface moderna e responsiva.',
      type: 'chart',
      tech: [
        { name: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
        { name: 'Chart.js', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
        { name: 'HTML5/CSS3', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
        { name: 'LocalStorage', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
      ],
      github: 'https://github.com/Noclipssz/Controle-de-Finan-as-Pessoais-despesas-receitas-',
      demo: null,
    },
    {
      title: 'Gym System Backend',
      description:
        'API robusta para gerenciamento de academias baseada em arquitetura de microsserviços. Implementada com containers Docker e documentada com BFF.',
      type: 'terminal',
      tech: [
        { name: 'Java', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
        { name: 'Spring Boot', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
        { name: 'Docker', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
        { name: 'PostgreSQL', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
      ],
      github: 'https://github.com/Noclipssz/fictional-system-back-end-gym',
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative bg-dark-900 border border-dark-800 rounded-lg overflow-hidden group hover:border-primary-500/50 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.15)] transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === index ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 z-0"
              />

              {/* Project Image */}
              <div className="relative h-48 bg-dark-800 flex items-center justify-center overflow-hidden p-6">
                 {/* Visual Preview */}
                 <div className="w-full h-full transform transition-transform duration-500 hover:scale-105">
                   <ProjectPreview type={project.type} />
                 </div>
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
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md border ${tech.color} font-medium cursor-pointer`}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 text-dark-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-dark-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
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
            className="group relative flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300 overflow-hidden"
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
