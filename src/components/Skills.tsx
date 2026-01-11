import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ReactIcon,
  VueIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  JavaIcon,
  PythonIcon,
  PHPIcon,
  NodeIcon,
  DockerIcon,
  MySQLIcon,
  TailwindIcon,
  GitIcon,
  AWSIcon
} from './TechIcons'

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillIcons: Record<string, JSX.Element> = {
    'React': <ReactIcon className="w-full h-full" />,
    'Vue.js': <VueIcon className="w-full h-full" />,
    'JavaScript': <JavaScriptIcon className="w-full h-full" />,
    'TypeScript': <TypeScriptIcon className="w-full h-full" />,
    'Java': <JavaIcon className="w-full h-full" />,
    'Spring Boot': <JavaIcon className="w-full h-full" />,
    'Python': <PythonIcon className="w-full h-full" />,
    'PHP': <PHPIcon className="w-full h-full" />,
    'Laravel': <PHPIcon className="w-full h-full" />,
    'Node.js': <NodeIcon className="w-full h-full" />,
    'Docker': <DockerIcon className="w-full h-full" />,
    'MySQL': <MySQLIcon className="w-full h-full" />,
    'PostgreSQL': <MySQLIcon className="w-full h-full" />,
    'MongoDB': <MySQLIcon className="w-full h-full" />,
    'Tailwind CSS': <TailwindIcon className="w-full h-full" />,
    'Git': <GitIcon className="w-full h-full" />,
    'GitHub': <GitIcon className="w-full h-full" />,
    'AWS': <AWSIcon className="w-full h-full" />,
  }

  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
          <path d="M8 21h8M12 17v4" strokeWidth="2" />
        </svg>
      ),
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="8" rx="2" strokeWidth="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" strokeWidth="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      skills: ['Java', 'Spring Boot', 'Python', 'PHP', 'Laravel', 'Node.js'],
    },
    {
      title: 'Database',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" strokeWidth="2" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" strokeWidth="2" />
        </svg>
      ),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'DevOps & Cloud',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M2 12h20" strokeWidth="2" />
          <path
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            strokeWidth="2"
          />
        </svg>
      ),
      skills: ['AWS', 'Docker', 'Linux', 'Ubuntu', 'Git', 'GitHub', 'CI/CD'],
    },
    {
      title: 'Ferramentas',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      skills: ['VS Code', 'IntelliJ IDEA', 'Postman', 'Swagger', 'Figma', 'Jira', 'Trello'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  }

  const skillColors = [
    'from-cyan-500 to-blue-500',
    'from-violet-500 to-purple-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-pink-500 to-rose-500',
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-dark-900/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-50 flex items-center gap-4">
            <span className="text-primary-500 font-mono text-xl md:text-2xl">
              02.
            </span>
            Tecnologias & Ferramentas
            <div className="hidden md:block h-px flex-1 bg-dark-800 ml-4"></div>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${skillColors[categoryIndex]} text-white shadow-lg`}
                >
                  <div className="w-7 h-7">
                    {category.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-dark-50">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-dark-800"></div>
              </div>

              {/* Skills Grid for this category */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={cardVariants}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative bg-dark-900 border border-dark-800 rounded-xl p-6 overflow-hidden group cursor-pointer flex flex-col items-center justify-center gap-4 aspect-square"
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredSkill === skill ? 0.15 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${skillColors[categoryIndex]}`}
                    />

                    {/* Border glow */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredSkill === skill ? 1 : 0,
                      }}
                      className="absolute inset-0 border-2 border-primary-500 rounded-xl"
                    />

                    {/* Icon */}
                    {skillIcons[skill] && (
                      <motion.div
                        animate={{
                          rotate: hoveredSkill === skill ? [0, -10, 10, 0] : 0,
                          scale: hoveredSkill === skill ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-16 h-16 flex items-center justify-center text-primary-400 group-hover:text-primary-300"
                      >
                        <div className="w-full h-full">
                          {skillIcons[skill]}
                        </div>
                      </motion.div>
                    )}

                    {/* Skill Name */}
                    <motion.p
                      className="relative z-10 text-sm font-semibold text-dark-50 text-center group-hover:text-white transition-colors"
                    >
                      {skill}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 800,
              }}
              animate={{
                y: [null, Math.random() * 800],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
