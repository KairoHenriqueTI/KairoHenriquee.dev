import React from 'react'

const Contact = () => {
  const [copied, setCopied] = React.useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kairo.h.seidler@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset após 2s
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-dark-900/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-50 flex items-center gap-3 sm:gap-4">
            <span className="text-primary-500 font-mono text-lg sm:text-xl md:text-2xl">
              04.
            </span>
            Entre em Contato
            <div className="hidden md:block h-px flex-1 bg-dark-800 ml-4"></div>
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-dark-50">
              Vamos trabalhar juntos?
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-300 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Disponível para oportunidades como Desenvolvedor Full Stack
            </div>
            <p className="text-dark-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou
              oportunidades de fazer parte da sua visão. Seja para colaborar em
              projetos open source, oportunidades de trabalho ou apenas trocar
              uma ideia sobre tecnologia.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-3 sm:gap-4 text-dark-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-dark-800 text-primary-500">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-dark-50 text-sm sm:text-base">Localização</p>
                  <p className="text-xs sm:text-sm">Santa Catarina, Brasil 🇧🇷</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-dark-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-dark-800 text-primary-500">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-dark-50 text-sm sm:text-base">Email</p>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:kairo.h.seidler@gmail.com"
                      className="text-xs sm:text-sm hover:text-primary-400 transition-colors"
                    >
                      kairo.h.seidler@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded hover:bg-dark-800 transition-colors text-dark-400 hover:text-primary-400"
                      title="Copiar email"
                    >
                      {copied ? (
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                    {copied && <span className="text-xs text-green-500 animate-fade-in">Copiado!</span>}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 text-dark-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-dark-800 text-primary-500">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-dark-50 text-sm sm:text-base">GitHub</p>
                  <a
                    href="https://github.com/Noclipssz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm hover:text-primary-400 transition-colors"
                  >
                    @Noclipssz
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://linkedin.com/in/kairohenrique"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-300"
              >
                Conectar no LinkedIn
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5h5m0 0v5m0-5L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* formulário removido — apenas informações de contato permanecem */}
        </div>
      </div>
    </section>
  )
}

export default Contact
