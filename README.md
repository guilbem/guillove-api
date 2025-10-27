

# 🩷 Sistema Web - Guillove — Frases e Dicas de Amor


---

## 📘 Introdução

O projeto **Guillove** tem como objetivo desenvolver um **sistema web moderno e interativo** que apresente frases e dicas de amor, permitindo que o usuário explore conteúdos motivacionais, reflexivos e românticos de forma organizada.

O sistema foi idealizado para oferecer uma experiência intuitiva e fluida, com uma **landing page inicial** que introduz o conceito do site e direciona o visitante para diferentes categorias de conteúdo. Além disso, o projeto visa criar uma base escalável que futuramente possa receber novas funcionalidades, como integração com banco de dados e APIs para sugestões enviadas pelos próprios usuários.

---

## 💡 Fundamentação Teórica

O desenvolvimento foi baseado em **conceitos fundamentais de Front-end e Back-end Web**, utilizando tecnologias modernas:

* **React + Vite**: para criação da interface e estrutura de componentes reutilizáveis.
* **React Router DOM**: para gerenciar rotas e navegação entre páginas sem recarregar o site.
* **Node.js e Express (planejado para próximas etapas)**: para construção de uma API simples que servirá frases, dicas e sugestões.
* **HTML5 e CSS3**: utilizados na estrutura e estilização básica das páginas.
* **JavaScript (ES6+)**: para manipulação de dados, criação de eventos e futura integração com o backend.

Essa combinação segue o padrão **SPA (Single Page Application)**, oferecendo desempenho otimizado, modularidade e fácil manutenção do código.

---

## 🧩 Estrutura do Projeto

```
guillove-front/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/                # Imagens e recursos estáticos
│   ├── components/
│   │   └── Header.jsx         # Cabeçalho e navegação principal
│   ├── pages/                 # Páginas do sistema
│   │   ├── Landing.jsx        # Página inicial (apresentação)
│   │   ├── Frases.jsx         # Página com frases inspiradoras
│   │   ├── Dicas.jsx          # Página com dicas de amor
│   │   └── EnviarSugestao.jsx # Página de envio de sugestões
│   ├── App.jsx                # Configuração principal e rotas
│   ├── main.jsx               # Ponto de entrada do React
│   ├── App.css                # Estilos gerais
│   └── index.css
│
├── package.json               # Dependências e scripts do projeto
├── vite.config.js             # Configuração do Vite
├── README.md                  # Documento de apresentação (este arquivo)
└── .gitignore
```

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia                            | Função Principal                                  |
| ------------------------------------- | ------------------------------------------------- |
| **React + Vite**                      | Interface moderna, componentização e build rápido |
| **React Router DOM**                  | Navegação entre páginas sem recarregar            |
| **HTML5 / CSS3**                      | Estrutura e estilos do layout                     |
| **JavaScript (ES6)**                  | Lógica do front-end e integração futura           |
| **Node.js + Express (próxima etapa)** | Criação de API e backend leve                     |
| **Git + GitHub**                      | Controle de versão e hospedagem do repositório    |
| **VS Code**                           | IDE principal do desenvolvimento                  |

---

## 🚀 Etapas do Desenvolvimento

| Etapa                                         | Descrição                                               | Status             |
| --------------------------------------------- | ------------------------------------------------------- | ------------------ |
| **1. Scaffold + Landing + Páginas estáticas** | Criação do esqueleto React e rotas básicas              | ✅ Concluído        |
| **2. API simples em Express (Mock)**          | Endpoints em memória para frases e dicas                | 🔜 Em planejamento |
| **3. Integração Front + API**                 | Conectar frontend à API com filtros e botão “Load More” | 🔜 Próxima         |
| **4. Banco de Dados (SQLite/MongoDB)**        | Persistência das sugestões enviadas                     | 🔜 Próxima         |
| **5. UI Responsiva + Testes**                 | Ajustes visuais e testes básicos                        | 🔜 A ser iniciado  |
| **6. Deploy**                                 | Publicação do sistema na web (Vercel + Render)          | 🔜 Futuro          |

---

## 🧠 Próximos Passos

1. Implementar backend com **Node.js + Express**.
2. Criar endpoints para retornar frases e dicas de forma dinâmica.
3. Adicionar botão “Gerar mais” e filtros por categoria.
4. Salvar sugestões em banco de dados (SQLite ou MongoDB).
5. Tornar o layout totalmente responsivo e moderno.

---


---

## 🖇️ Como executar localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/guilbem/guillove-front.git

# 2. Acessar o diretório
cd guillove-front

# 3. Instalar dependências
npm install

# 4. Rodar o servidor local
npm run dev
```

Acesse em: **[http://localhost:5173](http://localhost:5173)**

---


## 💬 Conclusão

O sistema visa oferecer uma experiência agradável aos usuários, sendo também uma vitrine de aplicação prática dos conhecimentos em desenvolvimento web moderno.

---


## 💡 Autoria
 Autor: Guilherme Guimarães
 Desenvolvimento Web com React e Node.js

