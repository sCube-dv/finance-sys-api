# Finance System API

API backend para um sistema de gestão financeira desenvolvida com Node.js, Express e MySQL.

## 📋 Sobre o Projeto

Finance System API é uma aplicação backend robusta e escalável para gerenciar operações financeiras. O projeto fornece endpoints RESTful para autenticação de usuários, gestão de dados e operações financeiras, com segurança através de criptografia bcrypt e banco de dados MySQL.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MySQL** - Banco de dados relacional
- **Sequelize** - ORM para Node.js
- **bcrypt** - Criptografia de senhas
- **CORS** - Gerenciamento de requisições cross-origin
- **Docker** - Containerização

## 📦 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose (opcional, para o banco de dados)
- npm ou yarn

## 🔧 Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/sCube-dv/finance-sys-api.git
cd finance-sys-api
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=t00r
DB_NAME=financial_db
DB_PORT=3306
NODE_ENV=development
```

### 4. Iniciar o banco de dados (Docker)

```bash
docker-compose up -d
```

Isso iniciará um container MySQL com as credenciais padrão configuradas.

## 🎯 Como Executar

### Desenvolvimento (com hot reload)

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

### Produção

```bash
npm start
```

## 📚 Estrutura do Projeto

```
finance-sys-api/
├── src/
│   ├── app.js                 # Configuração da aplicação Express
│   ├── config/
│   │   └── db.js              # Configuração do banco de dados
│   ├── controllers/
│   │   └── UserController.js  # Lógica de usuários
│   ├── models/
│   │   └── Users.js           # Modelo de usuários
│   ├── routes/
│   │   └── user.js            # Rotas de usuários
│   └── helpers/
│       └── generator.js       # Funções auxiliares
├── server.js                  # Entry point da aplicação
├── package.json               # Dependências do projeto
├── docker-compose.yml         # Configuração Docker
└── README.md                  # Este arquivo
```

## 🔌 Endpoints da API

### Root
- `GET /` - Verifica se a API está rodando

### Usuários
- `GET /usuarios` - Lista todos os usuários
- `GET /usuarios/:id` - Obtém usuário por ID
- `POST /usuarios` - Cria novo usuário
- `PUT /usuarios/:id` - Atualiza usuário
- `DELETE /usuarios/:id` - Deleta usuário

## 🗄️ Banco de Dados

O projeto utiliza MySQL com Sequelize como ORM. A configuração padrão:

- **Host**: localhost
- **Porta**: 3306
- **Usuário**: root
- **Senha**: t00r
- **Database**: financial_db

Para alterar as credenciais, edite o arquivo `docker-compose.yml` ou configure as variáveis de ambiente.

## 🔒 Segurança

- Senhas são criptografadas com bcrypt
- CORS habilitado para requisições cross-origin
- Validação de entrada de dados
- Variáveis de ambiente para dados sensíveis

## 📝 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot reload
- `npm start` - Executa em modo produção
- `npm test` - Executa testes (em desenvolvimento)

## 🐳 Docker Compose

Para gerenciar o container do banco de dados:

```bash
# Iniciar serviços
docker-compose up -d

# Parar serviços
docker-compose down

# Ver logs
docker-compose logs -f db
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para alterações significativas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é licenciado sob a Licença ISC - veja o arquivo LICENSE para detalhes.

## 👤 Autor

**Samuel Santos**

- GitHub: [@sCube-dv](https://github.com/sCube-dv)
- Repositório: [finance-sys-api](https://github.com/sCube-dv/finance-sys-api)

## 📞 Suporte

Para reportar bugs ou sugerir melhorias, abra uma [issue](https://github.com/sCube-dv/finance-sys-api/issues).

---

**Última atualização**: Dezembro 2025
