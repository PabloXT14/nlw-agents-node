<h1 align="center">
  <img
    src=".github/nlw-agents-logo.svg"
    title="NLW Agents"
    alt="NLW Agents"
  />

  NLW Agents
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pabloxt14/nlw-agents-node">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/pabloxt14/nlw-agents-node" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/pabloxt14/nlw-agents-node">
  
  <a href="https://github.com/pabloxt14/nlw-agents-node/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pabloxt14/nlw-agents-node">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

   <a href="https://github.com/pabloxt14/nlw-agents-node/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/pabloxt14/nlw-agents-node?style=social">
  </a>
</p>

## 💻 Sobre

Projeto desenvolvido durante um evento da **Rocketseat** utilizando tecnologias modernas para criação de uma API robusta e eficiente.

## 🚀 Tecnologias

- **Node.js** com TypeScript nativo (experimental strip types)
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** com extensão **pgvector** para vetores
- **Drizzle ORM** - Type-safe database operations
- **Zod** - Schema validation
- **Docker** - Containerização do banco de dados
- **Biome** - Linting e formatação de código
- **@google/genai** - API de IA da Google

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular com:

- **Separação de responsabilidades** entre rotas, schemas e conexão com banco
- **Validação de schemas** com Zod para type safety
- **ORM type-safe** com Drizzle para operações de banco de dados
- **Validação de variáveis de ambiente** centralizadas

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js (versão com suporte a `--experimental-strip-types`)
- Docker e Docker Compose

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd server
```

### 2. Configure o banco de dados
```bash
docker-compose up -d
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=<chave-api-gemini>
```

### 4. Instale as dependências
```bash
npm install
```

### 5. Execute as migrações do banco
```bash
npx drizzle-kit migrate
```

### 6. (Opcional) Popule o banco com dados de exemplo
```bash
npm run db:seed
```

### 7. Execute o projeto

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

## 📚 Scripts Disponíveis

- `npm run dev` - Executa o servidor em modo de desenvolvimento com hot reload
- `npm start` - Executa o servidor em modo de produção
- `npm run db:seed` - Popula o banco de dados com dados de exemplo

## 🌐 Endpoints

A API estará disponível em `http://localhost:3333`

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista as salas disponíveis
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:roomId/questions` - Lista as perguntas de uma sala específica
- `POST /rooms/:roomId/questions` - Cria uma nova pergunta para uma sala especifica
- `POST /rooms/:roomId/audio` - Envia um audio para uma sala especifica

---

Desenvolvido com ❤️ durante o NLW da Rocketseat 🚀