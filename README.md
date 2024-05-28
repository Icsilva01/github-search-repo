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

## Estrutura do Projeto

- `src/`
  - `components/`: Componentes React utilizados na aplicação.
    - `RepoTable.tsx`: Componente que exibe a tabela de repositórios.
    - `NoData.tsx`: Componente que exibe uma mensagem quando não há dados.
  - `redux/`: Arquivos relacionados ao Redux.
    - `actions/`: Ações do Redux.
      - `actions.ts`: Ações para buscar repositórios, selecionar um repositório, abrir e fechar modal.
    - `reducers/`: Redutores do Redux.
      - `reducers.ts`: Redutores combinados para o estado da aplicação.
    - `types/`: Tipos utilizados no Redux.
      - `types.ts`: Definições de tipos para ações e estado.
  - `infra/`: Arquivos de infraestrutura.
    - `client.ts`: Configuração do Apollo Client.
    - `query.ts`: Consultas GraphQL.
  - `presentation/`: Arquivos de apresentação.
    - `App.tsx`: Página principal da aplicação.
  

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

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API do GitHub:

   ```plaintext
   REACT_APP_GITHUB_API_TOKEN=your_github_api_token
   ```

4. Inicie a aplicação:

   ```bash
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Uso

1. Digite uma consulta na barra de pesquisa e pressione "Enter" ou clique no botão de busca.
2. Navegue pelos resultados da pesquisa usando a paginação.
3. Clique no detalhe de um repositório para visualizar mais detalhes sobre ele.

## Contribuição

Se você gostaria de contribuir para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Agradecemos suas contribuições!

---

Sinta-se à vontade para ajustar o conteúdo conforme necessário para melhor atender às especificidades do seu projeto e às preferências pessoais.