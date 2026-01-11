import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { number: '4/5', label: 'Semestres ADS', icon: '🎓' },
    { number: '25+', label: 'Repositórios', icon: '📦' },
    { number: 'Full Stack', label: 'Desenvolvedor', icon: '💻' },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4">
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
              01.
            </span>
            Sobre Mim
            <div className="hidden md:block h-px flex-1 bg-dark-800 ml-4"></div>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-3 sm:space-y-4 text-dark-300 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            <p>
              Olá! Sou <strong className="text-dark-50">Kairo Henrique</strong>,
              um desenvolvedor Full Stack em formação, apaixonado por criar
              soluções digitais que fazem a diferença. Atualmente estou cursando
              o 5º semestre de{' '}
              <strong className="text-dark-50">
                Análise e Desenvolvimento de Sistemas
              </strong>
              .
            </p>
            <p>
              Minha jornada na tecnologia começou com a curiosidade de entender
              como as coisas funcionam nos bastidores. Hoje, trabalho com
              desenvolvimento completo, desde a interface do usuário até a
              infraestrutura e automação de servidores.
            </p>
            <p>
              Tenho forte interesse em{' '}
              <strong className="text-primary-400">código limpo</strong>,{' '}
              <strong className="text-primary-400">
                arquitetura de software
              </strong>{' '}
              e <strong className="text-primary-400">DevOps</strong>. Acredito
              que boas práticas de desenvolvimento e automação são essenciais
              para criar sistemas robustos e escaláveis.
            </p>
            <p>
              Baseado em{' '}
              <strong className="text-dark-50">
                Santa Catarina, Brasil 🇧🇷
              </strong>
              , estou sempre em busca de novos desafios e oportunidades de
              aprendizado.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="space-y-3 sm:space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="relative bg-dark-900 border border-dark-800 rounded-lg p-4 sm:p-5 md:p-6 overflow-hidden group cursor-default"
              >
                {/* Animated background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1 sm:mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-dark-400 text-xs sm:text-sm group-hover:text-dark-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="text-3xl sm:text-4xl opacity-20 group-hover:opacity-40 transition-opacity"
                  >
                    {stat.icon}
                  </motion.div>
                </div>

                {/* Progress bar animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
