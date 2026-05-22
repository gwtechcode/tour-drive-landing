# Tour Drive Landing

Landing page premium para locacao de veiculos para turistas, criada com Next.js, React, styled-components e react-icons.

## Stack

- Next.js 14 com App Router
- React 18
- styled-components
- react-icons
- TypeScript

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## CMS

A landing tem duas formas de edicao:

1. Painel visual em `/admin`, usando Decap CMS conectado ao GitHub.
2. Arquivo `content/site.json`, util para ajustes diretos por desenvolvedores.

O cliente pode alterar:

- Dados da marca
- WhatsApp e links sociais
- Texto da hero
- Veiculos, fotos, valores e descricoes
- Beneficios
- Perguntas frequentes

Depois de editar pelo CMS e publicar no GitHub, o Vercel faz o deploy automaticamente.

No arquivo `public/admin/config.yml`, ajuste `repo: gwtechcode/tour-drive-landing` para o nome real do repositorio criado.

## Deploy

Repositorio GitHub sugerido: `https://github.com/gwtechcode`

Conta Vercel informada: `https://vercel.com/gwtechcode-8479s-projects`

Passos:

1. Crie um novo repositorio no GitHub da conta `gwtechcode`.
2. Envie este projeto para o repositorio.
3. No Vercel, clique em `Add New Project`.
4. Importe o repositorio.
5. Framework preset: `Next.js`.
6. Build command: `npm run build`.
7. Output directory: `.next`.

## GitHub

Este projeto ainda nao inicializa o repositorio automaticamente. Para publicar:

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/gwtechcode/tour-drive-landing.git
git push -u origin main
```

## Evolucao prevista

A pasta `lib/integrations` concentra contratos para futuras integracoes de reservas, pagamentos, WhatsApp e painel administrativo. Hoje a landing usa dados estaticos, mas a estrutura ja separa conteudo, UI e servicos.
