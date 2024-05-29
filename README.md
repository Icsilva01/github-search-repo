# GitHub Search Repo

GitHub Search Repo é uma aplicação web que permite aos usuários pesquisar e visualizar repositórios do GitHub. A aplicação é construída com React, Redux, Material-UI e GraphQL, proporcionando uma interface amigável e intuitiva para explorar repositórios do GitHub.

# Capturas de tela

<img src="/public/imgREADME/emptyImg.png" alt="Github logo"/>
<img src="/public/imgREADME/tableImg.png" alt="Github logo"/>
<img src="/public/imgREADME/ModalImg.png" alt="Github logo"/>

## Funcionalidades

- **Pesquisa de Repositórios**: Pesquise repositórios do GitHub com base em uma consulta.
- **Paginação**: Navegue pelos resultados da pesquisa com paginação.
- **Visualização de Detalhes**: Visualize detalhes específicos de um repositório, incluindo o nome, descrição, proprietário, issues abertas, pull requests abertas, commits e branches.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Redux**: Biblioteca para gerenciamento de estado.
- **Material-UI**: Biblioteca de componentes React para um design consistente e responsivo.
- **GraphQL**: Linguagem de consulta para a API do GitHub.
- **Apollo Client**: Cliente GraphQL para realizar consultas.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Icsilva01/github-search-repo.git
   cd github-search-repo
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Edite o arquivo `token.ts` na pasta de infra do projeto e adicione sua chave de API do GitHub:

   ```plaintext
   const Token = 'COLOQUE SEU TOKEN AQUI'
   ```

4. Inicie a aplicação:

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173`.

## Uso

1. Digite uma consulta na barra de pesquisa e pressione "Enter" ou clique no botão de busca.
2. Navegue pelos resultados da pesquisa usando a paginação.
3. Clique no detalhe de um repositório para visualizar mais detalhes sobre ele.
4. Caso queira limpar a consulta de busca já realizada, o botão "Limpar faz isso".