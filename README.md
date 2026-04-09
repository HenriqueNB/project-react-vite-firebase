# project-react-vite-firebase
## Descrição
Este projeto é uma aplicação web desenvolvida com React (Vite) que utiliza o Firebase Authentication para realizar cadastro, login e gerenciamento de sessão de usuários.

A aplicação permite que usuários criem uma conta com e-mail e senha, façam login e permaneçam autenticados mesmo após recarregar a página.

---

## Funcionalidades
- Cadastro de usuário com e-mail e senha
- Login de usuário
- Tratamento de erros:
  - Email inválido
  - Senha fraca (mínimo 6 caracteres)
  - Usuário não encontrado
  - Credenciais incorretas
- Estado de autenticação persistente (onAuthStateChanged)
- Loading durante autenticação
- Logout
- Interface dinâmica (troca entre telas de login/cadastro e área logada)

---

## Tecnologias utilizadas
- React (Vite)
- Firebase Authentication
- JavaScript (ES6+)
- CSS

---

## Configuração do Firebase

Para utilizar o Firebase Authentication, siga os passos:

1. Acesse: [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Clique em "Criar projeto"
3. Vá em Authentication
4. Ative o provedor "E-mail/senha"
5. Registre um aplicativo web e copie as credenciais

---
## Fotos do projeto
<img width="930" height="623" alt="image" src="https://github.com/user-attachments/assets/7d472a80-5f7a-40b0-9f0d-f8d9d9cbb6ce" />

---
<img width="930" height="623" alt="image" src="https://github.com/user-attachments/assets/1cd7b31f-260b-4f60-8282-153ce4fd33ca" />

---
## Como executar o projeto

### Pré-requisitos
- Node.js instalado
- NPM ou Yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

# Crie um arquivo .env na raiz e adicione suas credenciais do Firebase:
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id

# Execute o projeto
npm run dev
Acesse http://localhost:5173 no navegador.

Estrutura do projeto
text
📁 projeto/
├── 📁 src/
│   ├── 📄 App.jsx          # Lógica principal de autenticação
│   ├── 📄 App.css          # Estilos da aplicação
│   ├── 📄 firebase.js      # Configuração do Firebase
│   └── 📄 main.jsx         # Entry point
├── 📄 index.html
├── 📄 package.json
└── 📄 README.md
Prints da aplicação
Tela de login/cadastro
https://media/login.png

Tela do usuário logado
https://media/logged.png

Tratamento de erro
https://media/error.png

Funcionamento
Usuário não autenticado → Exibe formulários de cadastro e login

Usuário cadastra → Firebase cria a conta e já autentica automaticamente

Usuário logado → Exibe e-mail do usuário e botão de logout

Recarregar página → onAuthStateChanged mantém o usuário logado

Logout → Encerra sessão e volta para tela inicial

Tratamento de erros implementados
Erro do Firebase	Mensagem exibida
auth/email-already-in-use	E-mail já está em uso
auth/weak-password	A senha deve ter pelo menos 6 caracteres
auth/invalid-email	E-mail inválido
auth/user-not-found	Usuário não encontrado
auth/wrong-password	Senha incorreta
auth/too-many-requests	Muitas tentativas. Tente novamente mais tarde
Melhorias futuras
Login com Google

Reset de senha (esqueci minha senha)

Verificação de e-mail

Autor
[José Henrique Nascimento Bessa] - GitHub

Status do projeto
✅ Concluído e funcionando

text

---

```env
# .env.example
VITE_FIREBASE_API_KEY=digite_sua_chave_aqui
VITE_FIREBASE_AUTH_DOMAIN=digite_seu_dominio_aqui
VITE_FIREBASE_PROJECT_ID=digite_seu_project_id_aqui
VITE_FIREBASE_STORAGE_BUCKET=digite_seu_bucket_aqui
VITE_FIREBASE_MESSAGING_SENDER_ID=digite_seu_sender_id_aqui
VITE_FIREBASE_APP_ID=digite_seu_app_id_aqui
