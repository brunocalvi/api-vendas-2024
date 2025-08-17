# 🛒 API Vendas 2024

API RESTful para gestão de vendas, desenvolvida com Node.js, Express, TypeScript, TypeORM, PostgreSQL, Redis e Docker.

---

## 🚀 Visão Geral

Este projeto permite gerenciar:

- Produtos
- Clientes
- Pedidos de compra
- Usuários da aplicação

Inclui autenticação via JWT, recuperação de senha por e‑mail, perfil do usuário e avatar, entre outros recursos.

---
## 📦 Estrutura do Projeto
```shell
/.
├── src/
│   ├── controllers/
│   ├── entities/
│   ├── repositories/
│   ├── services/
│   ├── middlewares/
│   ├── routes/
│   └── index.ts
├── .env.example
├── ormconfig.example.json
├── tsconfig.json
├── package.json
└── README.md
```
---

## 🧩 Tecnologias

- **Node.js**, **Express**, **TypeScript**
- **TypeORM** (com PostgreSQL)
- **Redis** (para cache ou envio desas compras rate limiting, sessões etc.)
- **Docker** (opcional: containerização da aplicação)
- **JWT** para autenticação
- **Nodemailer** ou similar para envio de e‑mails

---

## ⚙️ Pré-requisitos

- Node.js (≥ 18.x)
- Yarn ou npm
- PostgreSQL
- Redis
- Docker/Docker‑Compose (*opcional*)

---

## 🚧 Instalação & Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/brunocalvi/api-vendas-2024.git
   cd api-vendas-2024
