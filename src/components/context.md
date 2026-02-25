# Contexto dos Componentes (`src/components`)

## Papel da pasta
Conter seções visuais e blocos reutilizáveis do portfólio em arquitetura orientada a seções da página única.

## Mapa de componentes
- `Navbar.tsx`: header fixo com menu desktop/mobile + progress bar de scroll.
- `Hero.tsx`: seção inicial com identidade profissional, CTAs e links sociais.
- `About.tsx`: biografia, timeline de trajetória e blocos de stack/metodologias.
- `Skills.tsx`: grade por categorias com ícones custom em `TechIcons.tsx`.
- `Projects.tsx`: cards com previews simulados e links para repositórios.
- `Contact.tsx`: dados de contato e ação de copiar email.
- `WhatsAppButton.tsx`: botão flutuante para contato direto.
- `Footer.tsx`: rodapé com navegação e social.
- `TechIcons.tsx`: biblioteca local de SVGs para tecnologias/ferramentas.

## Padrões usados
- Componentes funcionais em TypeScript.
- Animações com Framer Motion em blocos de entrada, hover e microinterações.
- Estrutura visual com Tailwind utilitário e tokens `primary/dark`.
- Conteúdo estático definido localmente por arrays/objetos no próprio componente.

## Convenções de manutenção
- IDs de seção devem permanecer estáveis (`home`, `about`, `skills`, `projects`, `contact`) para manter navegação do menu.
- Novos itens de skill/projeto devem seguir padrão dos arrays atuais para evitar regressão visual.
- Ícones novos devem ser adicionados em `TechIcons.tsx` e mapeados em `Skills.tsx`.

## Atenções específicas
- `Skills.tsx` tem alta complexidade visual/animada; alterações devem preservar performance.
- `Projects.tsx` usa previews simulados (não screenshots reais), mantendo consistência visual.
- `Contact.tsx` depende de `navigator.clipboard`; comportamento pode variar em contextos sem permissão HTTPS.
- `WhatsAppButton.tsx` usa cor hardcoded do WhatsApp, fora do token do tema.

## Quando editar cada arquivo
- Atualização de conteúdo pessoal/carreira: `About.tsx`.
- Nova tecnologia/ferramenta: `Skills.tsx` + `TechIcons.tsx`.
- Novo projeto no portfólio: `Projects.tsx`.
- Novos canais/links de contato: `Contact.tsx`, `Footer.tsx`, `Hero.tsx`.
- Ajustes de navegação e UX global de topo: `Navbar.tsx`.