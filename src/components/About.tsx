import { motion } from 'framer-motion'

const About = () => {
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

        <div>
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 text-dark-300 text-sm sm:text-base md:text-lg leading-relaxed"
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
              desenvolvimento, desde a interface do usuário até a
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
              Nascido em{' '}
              <strong className="text-dark-50">
                Santa Catarina, Brasil 🇧🇷
              </strong>
              , estou sempre em busca de novos desafios e oportunidades de
              aprendizado.
            </p>

            {/* Diferenciais */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-dark-50 flex items-center gap-2">
                  <span className="text-primary-500">🚀</span> Jornada & Educação
                </h3>
                <div className="relative border-l-2 border-dark-800 ml-3 space-y-8 pl-6">
                  <div className="relative">
                     <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary-500 border-4 border-dark-950"></span>
                     <h4 className="text-dark-50 font-bold">Desenvolvedor Full Stack</h4>
                     <p className="text-primary-400 text-sm">SBN Telecomunicações | Jul 2025 - Presente</p>
                     <p className="text-dark-400 text-sm mt-1">
                       Desenvolvimento e manutenção de software para sistemas e sites internos/externos, administração de servidores e automação de processos técnicos. Promovido de Assistente de Processos Técnicos.
                     </p>
                  </div>

                  <div className="relative">
                     <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-dark-700 border-4 border-dark-950"></span>
                     <h4 className="text-dark-50 font-bold">Análise e Desenvolvimento de Sistemas</h4>
                     <p className="text-primary-400 text-sm">Senac Blumenau - Presencial | 2024 - Presente</p>
                     <p className="text-dark-400 text-sm mt-1">Foco em Engenharia de Software e Arquitetura de Sistemas.</p>
                  </div>
                  
                  <div className="relative">
                     <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-dark-700 border-4 border-dark-950"></span>
                     <h4 className="text-dark-50 font-bold">Estágio em TI & Infraestrutura</h4>
                     <p className="text-primary-400 text-sm">Prefeitura de Guabiruba | 2024</p>
                     <p className="text-dark-400 text-sm mt-1">
                       Suporte técnico remoto e presencial, manutenção de redes/infraestrutura, configuração de servidores locais e setup de computadores, notebooks, roteadores e impressoras.
                     </p>
                  </div>

                  <div className="relative">
                     <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-dark-700 border-4 border-dark-950"></span>
                     <h4 className="text-dark-50 font-bold">Desenvolvedor Web (Estudos)</h4>
                     <p className="text-primary-400 text-sm">Udemy & Autodidata | 2023 - 2026</p>
                     <p className="text-dark-400 text-sm mt-1">
                       +300h em cursos de Java, Banco de Dados (MySQL) e Full Stack (JS/TS).
                     </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-dark-50 flex items-center gap-2">
                  <span className="text-primary-500">🔧</span> Stack Principal
                </h3>
                <div className="space-y-4">
                   <div className="bg-dark-800/50 p-4 rounded-lg border border-dark-800 hover:border-primary-500/30 transition-colors">
                      <h4 className="text-primary-400 font-bold mb-2">Back-end & DevOps</h4>
                      <p className="text-sm text-dark-300">
                        Java (Spring Boot), PHP (Laravel), Python, Docker, AWS (EC2, S3, Route 53), Linux e Windows Server.
                      </p>
                   </div>
                   <div className="bg-dark-800/50 p-4 rounded-lg border border-dark-800 hover:border-primary-500/30 transition-colors">
                      <h4 className="text-primary-400 font-bold mb-2">Front-end</h4>
                      <p className="text-sm text-dark-300">
                        React, Vue.js, TypeScript, JavaScript, Tailwind CSS e Bootstrap.
                      </p>
                   </div>
                   <div className="bg-dark-800/50 p-4 rounded-lg border border-dark-800 hover:border-primary-500/30 transition-colors">
                      <h4 className="text-primary-400 font-bold mb-2">Infraestrutura, Redes & Métodos</h4>
                      <p className="text-sm text-dark-300">
                        WHM/cPanel, DNS, DHCP, VLANs, SSL/TLS, Clean Code, MVC, SOLID, TDD e Scrum/Kanban.
                      </p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
