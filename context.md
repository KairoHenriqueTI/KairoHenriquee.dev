# Contexto do Projeto — Kairohenriquee.dev

## Visão geral
Portfólio pessoal desenvolvido com **React + TypeScript + Vite + Tailwind CSS + Framer Motion**, com foco em:
- apresentação profissional (branding pessoal),
- experiência visual moderna,
- boa responsividade,
- suporte básico a PWA.

A aplicação é **single-page** e organizada em seções com navegação por âncoras (`#home`, `#about`, `#skills`, `#projects`, `#contact`).

## Objetivo do produto
Comunicar perfil profissional de Kairo Henrique, stack técnica, projetos em destaque e canais de contato, com CTA claro para GitHub/LinkedIn/WhatsApp/email.

## Stack e build
- Runtime/UI: React 18
- Linguagem: TypeScript
- Build tool: Vite 5
- Estilização: Tailwind CSS (tema custom com paleta `primary` e `dark`)
- Animações: Framer Motion
- PWA: `vite-plugin-pwa` (com chave de desativação via `DISABLE_PWA=true`)

Scripts principais (package.json):
- `npm run dev`: ambiente local
- `npm run build`: build produção (`tsc && vite build`)
- `npm run build:no-pwa`: build sem PWA
- `npm run preview`: preview do build
- `npm run preview:no-pwa`: preview sem PWA
- `npm run lint`: lint com ESLint

## Arquitetura da aplicação
### Entrada e composição
- `src/main.tsx` monta o app e tenta registrar service worker de forma defensiva.
- `src/App.tsx` faz composição da página e usa **lazy loading** + `Suspense` para reduzir bundle inicial.

### Estrutura de seções
- `Navbar`: navegação desktop/mobile, estado de scroll e barra de progresso de leitura.
- `Hero`: headline, CTAs, links sociais e visual central com ícones de tecnologias.
- `About`: narrativa profissional, timeline de experiência e blocos de stack/metodologias.
- `Skills`: categorias de skills com ícones custom e efeitos de hover.
- `Projects`: cards de projetos com preview visual, tecnologias e links de código.
- `Contact`: canais de contato (email com copiar, localização e GitHub).
- `WhatsAppButton`: CTA flutuante fixo.
- `Footer`: branding, navegação e links sociais.

## Estilo, tema e UX
- Tema escuro predominante, com escala de cores custom (`dark-*`) e destaque em azul (`primary-*`).
- Fonts: Inter (sans) e JetBrains Mono (mono) via import no CSS global.
- Scroll suave habilitado globalmente.
- Layout mobile-first com breakpoints do Tailwind.

## PWA
- Manifest presente em `public/manifest.webmanifest`.
- Configuração duplicada no plugin Vite (`vite.config.ts`) com `registerType: autoUpdate`.
- Registro de SW em runtime com import dinâmico protegido (evita quebrar quando PWA está desligado).

## Decisões técnicas observadas
1. **Performance inicial**: seções carregadas com `lazy`.
2. **Resiliência de build**: fallback quando `virtual:pwa-register` não está disponível.
3. **Design consistente**: uso forte de tokens Tailwind e classes utilitárias.
4. **Portfólio data-driven parcial**: arrays locais em componentes (`projects`, `skills`, links).

## Pontos de atenção / dívida técnica
1. **Duplicidade de fonte de verdade do manifest**
   - Existe em `public/manifest.webmanifest` e também em `vite.config.ts`.
   - Risco: divergência de metadados com o tempo.

2. **Cores hardcoded no WhatsAppButton**
   - `bg-[#25D366]` e sombras com hex direto fogem do design token principal.

3. **Dados de conteúdo acoplados à UI**
   - Experiências, skills e projetos estão em arrays inline nos componentes.
   - Escalar/manter fica mais difícil sem camada de dados (JSON/CMS/local config).

4. **Potencial excesso de animação em dispositivos fracos**
   - Apesar de otimizações, ainda há muitos elementos animados.
   - O `prefers-reduced-motion` está tratado no Hero, mas não de forma global.

## Regras implícitas para futuras alterações
- Manter padrão visual dark + acento `primary`.
- Priorizar responsividade e legibilidade em mobile.
- Evitar quebrar navegação por âncoras da `Navbar`.
- Preservar lazy loading e organização por seções.
- Se alterar PWA, sincronizar manifest/plugin/register.

## Próximos passos sugeridos (prioridade)
1. Centralizar dados de conteúdo em arquivo(s) de configuração.
2. Definir fonte única para manifest PWA.
3. Adicionar `prefers-reduced-motion` como estratégia global.
4. Padronizar cores fora da escala de tokens do tema.
5. Adicionar testes básicos de render das seções principais.

## Resumo rápido
Projeto bem estruturado para portfólio, com boa base visual e de performance. O principal ganho futuro está em **manutenibilidade de conteúdo** e **padronização de configuração PWA/tema**.