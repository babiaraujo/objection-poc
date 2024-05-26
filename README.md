# Objection.js PoC com Node.js e Express

## Introdução

Este projeto é uma Prova de Conceito (PoC) que utiliza o Objection.js, um ORM (Object-Relational Mapper) para Node.js, em conjunto com o Express para criar uma API RESTful.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework para criação de APIs em Node.js.
- **Objection.js**: ORM para Node.js, baseado em Knex.js.
- **Knex.js**: Query builder SQL para Node.js.
- **SQLite3**: Banco de dados leve e de fácil configuração.

## Configuração do Projeto

### Passo 1: Inicializar o Projeto

1. Crie uma nova pasta para o projeto e inicialize o npm:

```bash
mkdir objection-poc
cd objection-poc
npm init -y
```

### Passo 2: Instalar Dependências

Instale as dependências necessárias:

```bash
npm install express objection knex sqlite3 body-parser
```

### Passo 3: Configurar o Banco de Dados

Crie e execute as migrações para configurar o banco de dados:

```bash
npx knex migrate:make create_users_table
npx knex migrate:latest
```

### Iniciar o Servidor

Inicie o servidor:

```bash
npm start
```

## Documentação da API

### Criar um Usuário

- **Endpoint:** POST /users
- **Descrição:** Cria um novo usuário.
- **Corpo da Requisição:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

- **Resposta de Sucesso:**
  - **Código:** 201 CREATED
  - **Conteúdo:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

### Listar Todos os Usuários

- **Endpoint:** GET /users
- **Descrição:** Retorna todos os usuários.
- **Resposta de Sucesso:**
  - **Código:** 200 OK
  - **Conteúdo:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
]
```

### Obter um Usuário pelo ID

- **Endpoint:** GET /users/:id
- **Descrição:** Retorna um usuário pelo seu ID.
- **Resposta de Sucesso:**
  - **Código:** 200 OK
  - **Conteúdo:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

- **Resposta de Erro:**
  - **Código:** 404 NOT FOUND
  - **Conteúdo:**

```json
{
  "error": "User not found"
}
```

### Atualizar um Usuário

- **Endpoint:** PUT /users/:id
- **Descrição:** Atualiza um usuário pelo seu ID.
- **Corpo da Requisição:**

```json
{
  "name": "Jane Doe"
}
```

- **Resposta de Sucesso:**
  - **Código:** 200 OK
  - **Conteúdo:**

```json
{
  "id": 1,
  "name": "Jane Doe",
  "email": "john.doe@example.com"
}
```

- **Resposta de Erro:**
  - **Código:** 404 NOT FOUND
  - **Conteúdo:**

```json
{
  "error": "User not found"
}
```

### Deletar um Usuário

- **Endpoint:** DELETE /users/:id
- **Descrição:** Deleta um usuário pelo seu ID.
- **Resposta de Sucesso:**
  - **Código:** 204 NO CONTENT
- **Resposta de Erro:**
  - **Código:** 404 NOT FOUND
  - **Conteúdo:**

```json
{
  "error": "User not found"
}
```

## Conclusão

Esta PoC demonstra como usar o Objection.js com Node.js e Express para criar uma API RESTful básica. Sinta-se à vontade para expandir este exemplo com mais funcionalidades e relacionamentos entre modelos.
