# 👨‍💻 Portfolio - Filipe Gomes

Portfolio pessoal desenvolvido em React.js com design responsivo e tema dark/light.

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/LipzDev/Portfolio-ReactJs.git
   cd Portfolio-ReactJs
   ```

2. **Instale as dependências**

   **Usando npm:**

   ```bash
   npm install
   ```

   **Usando yarn:**

   ```bash
   yarn install
   ```

3. **Execute o projeto**

   **Usando npm:**

   ```bash
   npm start
   ```

   **Usando yarn:**

   ```bash
   yarn start
   ```

   **⚠️ Problema com Node.js 17+?**

   Se você estiver usando Node.js versão 17 ou superior e encontrar o erro `error:0308010C:digital envelope routines::unsupported`, use um destes comandos:

   **Para Windows (Git Bash):**

   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider && npm start
   # ou
   export NODE_OPTIONS=--openssl-legacy-provider && yarn start
   ```

   **Para Windows (CMD/PowerShell):**

   ```bash
   set NODE_OPTIONS=--openssl-legacy-provider && npm start
   # ou
   set NODE_OPTIONS=--openssl-legacy-provider && yarn start
   ```

   **Para Linux/Mac:**

   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider && npm start
   # ou
   export NODE_OPTIONS=--openssl-legacy-provider && yarn start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente que é um projeto React
3. O deploy será feito automaticamente em: `https://filipedev-portfolio.vercel.app`

### Opção 2: Deploy Manual

1. Instale o Vercel CLI: `npm install -g vercel`
2. Faça login: `vercel login`
3. Deploy: `vercel --prod`

## 🛠️ Tecnologias

- **React 18.2.0** - Biblioteca JavaScript
- **React Router DOM** - Roteamento
- **React Helmet** - Meta tags
- **Axios** - Requisições HTTP
- **CSS3** - Estilização responsiva

## 📱 Funcionalidades

- Design responsivo para todos os dispositivos
- Tema dark/light com alternância
- Seções: Início, Sobre, Repositórios, Contato
- Integração com API do GitHub
- SEO otimizado

## 📞 Contato

- **GitHub**: [@LipzDev](https://github.com/LipzDev)
- **LinkedIn**: [lipzdev](https://linkedin.com/in/lipzdev)
- **Email**: contato.devweb@hotmail.com

---

<div align="center">
  <p>Feito com ❤️ por <strong>Filipe Gomes</strong></p>
</div>
