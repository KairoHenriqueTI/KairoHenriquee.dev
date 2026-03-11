import { motion } from 'framer-motion'
import {
  ReactIcon,
  VueIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  JavaIcon,
  PythonIcon,
  PHPIcon,
  DockerIcon,
  MySQLIcon,
  TailwindIcon,
  GitIcon,
  AWSIcon,
  BootstrapIcon,
  LinuxIcon,
  PostmanIcon,
  SwaggerIcon,
} from './TechIcons'

const Skills = () => {

  const skillIcons: Record<string, JSX.Element> = {
    'React': <ReactIcon className="w-full h-full" />,
    'Vue.js': <VueIcon className="w-full h-full" />,
    'JavaScript': <JavaScriptIcon className="w-full h-full" />,
    'TypeScript': <TypeScriptIcon className="w-full h-full" />,
    'Tailwind CSS': <TailwindIcon className="w-full h-full" />,
    'Bootstrap': <BootstrapIcon className="w-full h-full" />,
    'Java': <JavaIcon className="w-full h-full" />,
    'Spring Boot': <JavaIcon className="w-full h-full" />,
    'Python': <PythonIcon className="w-full h-full" />,
    'PHP': <PHPIcon className="w-full h-full" />,
    'Laravel': <PHPIcon className="w-full h-full" />,
    'Docker': <DockerIcon className="w-full h-full" />,
    'MySQL': <MySQLIcon className="w-full h-full" />,
    'Git': <GitIcon className="w-full h-full" />,
    'GitHub': <GitIcon className="w-full h-full" />,
    'AWS': <AWSIcon className="w-full h-full" />,
    'AWS EC2': <AWSIcon className="w-full h-full" />,
    'AWS S3': <AWSIcon className="w-full h-full" />,
    'AWS Route 53': <AWSIcon className="w-full h-full" />,
    'Linux': <LinuxIcon className="w-full h-full" />,
    'Windows Server': <LinuxIcon className="w-full h-full" />,
    'WHM/cPanel': <LinuxIcon className="w-full h-full" />,
    'Postman': <PostmanIcon className="w-full h-full" />,
    'Swagger': <SwaggerIcon className="w-full h-full" />,
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
      skills: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
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
      skills: ['Java', 'Spring Boot', 'Python', 'PHP', 'Laravel'],
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
      skills: ['MySQL'],
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
      skills: ['AWS', 'AWS EC2', 'AWS S3', 'AWS Route 53', 'Docker'],
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
      skills: ['Git', 'GitHub', 'Postman', 'Swagger'],
    },
    {
      title: 'Infra & Redes',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="7" cy="12" r="1" fill="currentColor" />
          <circle cx="7" cy="17" r="1" fill="currentColor" />
        </svg>
      ),
      skills: ['Linux', 'Windows Server', 'WHM/cPanel', 'DNS', 'DHCP', 'VLANs', 'SSL/TLS'],
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
    'from-sky-500 to-indigo-500',
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 bg-dark-900/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-50 flex items-center gap-3 sm:gap-4">
            <span className="text-primary-500 font-mono text-lg sm:text-xl md:text-2xl">
              02.
            </span>
            <span className="text-xl sm:text-3xl md:text-4xl">Tecnologias & Ferramentas</span>
            <div className="hidden md:block h-px flex-1 bg-dark-800 ml-4"></div>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${skillColors[categoryIndex]} text-white shadow-lg`}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
                    {category.icon}
                  </div>
                </motion.div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark-50">
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
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative bg-dark-900 border border-dark-800 hover:border-primary-500 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 overflow-hidden group cursor-pointer flex flex-col items-center justify-center gap-3 sm:gap-4 min-h-[110px] sm:min-h-[130px] transition-colors duration-300"
                  >
                    {/* Gradient background on hover - CSS only */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skillColors[categoryIndex]} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    {skillIcons[skill] && (
                      <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center text-primary-400 group-hover:text-primary-300 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full">
                          {skillIcons[skill]}
                        </div>
                      </div>
                    )}

                    {/* Skill Name */}
                    <p className="relative z-10 text-xs sm:text-sm font-semibold text-dark-50 text-center group-hover:text-white transition-colors duration-300">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles background - Optimized */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 hidden sm:block">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * 800,
              }}
              animate={{
                y: [null, Math.random() * 800],
              }}
              transition={{
                duration: Math.random() * 20 + 20, // Slower duration = less CPU
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
