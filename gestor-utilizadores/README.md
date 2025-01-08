# Sistema de Gestão de Utilizadores

Este projeto é uma aplicação de gestão de utilizadores, implementada com React, que permite realizar operações de edição, eliminação e pesquisa de utilizadores. Os dados são armazenados localmente no navegador através do `localStorage`. A interface foi projetada para ser responsiva, garantindo uma boa experiência tanto em dispositivos desktop como móveis.

---

## Funcionalidades Principais

- **Edição de Utilizadores**: Permite editar informações como nome e e-mail de um utilizador existente.
- **Eliminação de Utilizadores**: Possibilita a exclusão de utilizadores após confirmação, garantindo segurança na remoção de dados.
- **Pesquisa de Utilizadores**: Inclui uma barra de pesquisa para filtrar utilizadores por nome ou e-mail.
- **Armazenamento Local**: Utiliza o `localStorage` para persistir os dados, permitindo que permaneçam disponíveis mesmo após recarregar a página.

---

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript utilizada para criar a interface de utilizador e gerir o estado da aplicação.
- **CSS**: Para estilização, incluindo design responsivo com suporte a diferentes dispositivos.
- **localStorage**: Armazenamento dos dados dos utilizadores no navegador de forma persistente.

---

## Estrutura do Projeto

O projeto está organizado de forma modular para facilitar a manutenção e escalabilidade. Abaixo segue uma descrição dos principais ficheiros e diretórios:

### Diretório `src`

- **`components/`**:
  - **`UserList.jsx`**: Componente principal que lista os utilizadores. Contém a lógica para visualizar, editar, eliminar e pesquisar utilizadores. Atualiza automaticamente o `localStorage` após alterações.
  - **`UserForm.jsx`**: Componente para a criação e edição de utilizadores, com validação de dados.
  - **`UserItem.jsx`**: Representa cada utilizador individualmente dentro da lista.

- **`services/`**:
  - **`api.js`**: Ficheiro dedicado à gestão de interações com o `localStorage`, abstraindo a lógica de leitura e escrita dos dados.

- **Ficheiros Globais**:
  - **`App.js`**: Componente raiz que integra todos os componentes e funcionalidades.
  - **`index.js`**: Ponto de entrada da aplicação React.
  - **`App.css`**: Estilos globais da aplicação.

### Diretório `public`

- **`index.html`**: Ficheiro base HTML onde a aplicação React é renderizada.
- **`manifest.json`**: Configuração da aplicação para navegadores.
- **`robots.txt`**: Ficheiro para controlo de indexação por motores de busca.

---

## Instalação e Execução

Siga os passos abaixo para instalar e executar o projeto localmente:

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/gestor-utilizadores.git
   cd gestor-utilizadores
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Execute a Aplicação**:
   ```bash
   npm start
   ```
   A aplicação será aberta no seu navegador em `http://localhost:3001`.

---

## Utilização

1. **Visualizar Utilizadores**:
   - Ao abrir a aplicação, verá uma lista de utilizadores existentes (caso estejam armazenados no `localStorage`).

2. **Pesquisar Utilizadores**:
   - Utilize a barra de pesquisa no topo da página para filtrar utilizadores pelo nome ou e-mail.

3. **Editar Utilizadores**:
   - Clique no botão "Editar" ao lado do utilizador que deseja alterar. Um formulário será exibido para edição dos dados.

4. **Eliminar Utilizadores**:
   - Clique no botão "Eliminar" ao lado do utilizador desejado. Será exibida uma confirmação antes de proceder com a remoção.

5. **Persistência dos Dados**:
   - Todos os dados são guardados no `localStorage`, garantindo que persistem mesmo após o recarregamento da página.

---

## Contribuição

Este projeto foi desenvolvido por Guilherme Faria e Emanuel Silva. 

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o ficheiro `LICENSE` para mais detalhes.