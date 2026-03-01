# FoodSmash - Gemini CLI Context

Este documento fornece contexto técnico e diretrizes para o desenvolvimento no projeto **FoodSmash**, uma aplicação Nuxt 4 utilizada para demonstrações do Gemini CLI.

## Visão Geral do Projeto

FoodSmash é uma plataforma social para compartilhar combinações inusitadas de alimentos.
- **Framework:** [Nuxt 4](https://nuxt.com/docs/getting-started/introduction) (utilizando a estrutura de diretório `app/`).
- **Linguagem:** TypeScript.
- **Estilização:** Vanilla CSS (localizado em `app/assets/css/main.css`).
- **Ícones:** Lucide Vue Next (`lucide-vue-next`).
- **Testes:** Vitest com `@nuxt/test-utils`.

## Comandos Principais

| Comando | Descrição |
| :--- | :--- |
| `npm install` | Instala as dependências do projeto. |
| `npm run dev` | Inicia o servidor de desenvolvimento em `http://localhost:3000`. |
| `npm run build` | Compila a aplicação para produção. |
| `npm run test` | Executa a suíte de testes usando Vitest. |
| `npm run generate` | Gera o site estático (SSG). |

## Estrutura de Diretórios

- `app/`: Contém o código-fonte principal da aplicação (padrão Nuxt 4).
  - `assets/css/`: Estilos globais.
  - `components/`: Componentes de UI reutilizáveis (ex: `FeatureCard.vue`, `ComboCard.vue`).
  - `layouts/`: Layouts da aplicação (ex: `default.vue`).
  - `pages/`: Páginas da aplicação (roteamento automático).
- `public/`: Arquivos estáticos (favicon, robots.txt).
- `test/nuxt/`: Testes de integração que utilizam o ambiente Nuxt.

## Convenções de Desenvolvimento

### Estilo de Código
- Utilize **Composition API** com `<script setup lang="ts">` em todos os componentes Vue.
- Prefira **Vanilla CSS** para estilização, mantendo a consistência com o arquivo `main.css`.
- Utilize ícones da biblioteca `lucide-vue-next`.

### Testes
- Todos os novos recursos ou correções de bugs devem vir acompanhados de testes.
- Testes de componentes/páginas devem ser colocados em `test/nuxt/` e utilizar `mountSuspended` do `@nuxt/test-utils/runtime`.

### Fluxo de Dados
- Atualmente, a aplicação utiliza estado local (`ref`) e exibe dados estáticos. 
- Implementações futuras devem considerar a integração com uma API ou store (como Pinia), se necessário.

## Funcionalidades Atuais
1. **Página Inicial (`/`):** Exibe o hero, funcionalidades e uma lista estática de "Recent Combos".
2. **Criação de Combos (`/create`):** Formulário para adicionar novos combos (atualmente apenas loga os dados no console).
