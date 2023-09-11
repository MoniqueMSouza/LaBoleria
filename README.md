# La Boleria - Gerenciador de Pedidos de Bolos

O La Boleria, é um sistema de gerenciamento de pedidos para uma loja de bolos 🎂. Este projeto tem como objetivo ajudar a loja a gerenciar os pedidos de bolos de forma eficiente, garantindo que todas as informações estejam organizadas e acessíveis.

## Sobre

### Principais Funcionalidades:

- **Cadastro de Bolos:** Registre diferentes tipos de bolos com nome, preço, imagem e descrição.

- **Cadastro de Clientes:** Registre informações dos clientes, como nome, endereço e telefone.

- **Registro de Pedidos:** Crie pedidos associando clientes e bolos, especificando a quantidade e o preço total.

- **Consulta de Pedidos:** Visualize os detalhes de todos os pedidos, incluindo informações sobre o cliente, o bolo, a data de criação e o preço.

- **Consulta de Pedidos por Cliente:** Liste todos os pedidos de um cliente específico.

- **Filtros de Data:** Filtre os pedidos por data de criação.

O La Boleria é a solução ideal para simplificar o gerenciamento de pedidos de bolos e manter um registro organizado de todas as transações.

 ## Futuras Implementações

Planejo implementar novos recursos que tornarão o sistema ainda melhor. Abaixo, algumas das futuras implementações:

### Tabela de Sabores de Bolos

- Implementação da tabela `flavours` no banco de dados, permitindo o registro de sabores de bolos.
- Modificação da tabela `cakes` para incluir o campo `flavourId`.
- Implementação da rota **POST** `/flavours` para criar novos sabores de bolo.
- Modificação da rota **POST** `/cakes` para incluir o campo `flavourId`.
- Modificação das rotas **GET** `/orders` para incluir informações sobre o sabor dos bolos.

### Controle de Entrega de Pedidos

- Adição do campo `isDelivered` na tabela `orders`.
- Implementação da rota **PATCH** `/order/:id` para alterar o status de entrega dos pedidos.
- Modificação das rotas **GET** `/orders` para incluir informações sobre se os pedidos foram entregues.


## Tecnologias Utilizadas

Neste projeto, foram utilizadas as seguintes tecnologias, bibliotecas e ferramentas:

- [Node.js](https://nodejs.org/): Plataforma de desenvolvimento utilizada como ambiente de execução do servidor.

- [Express.js](https://expressjs.com/): Framework web utilizado para criar a API do servidor e gerenciar as rotas da aplicação.

- [PostgreSQL](https://www.postgresql.org/): Banco de dados relacional escolhido para armazenar os dados do projeto.

- [Prisma](https://www.prisma.io/): Ferramenta ORM (Object-Relational Mapping) utilizada para modelar o esquema do banco de dados de forma eficiente e simplificada.

- [Joi](https://joi.dev/): Biblioteca utilizada para validar os dados de entrada nas rotas da API.

### Motivação das Escolhas

- **Node.js e Express.js:** Optamos por utilizar o `Node.js` com o Express.js devido à sua eficiência e à vasta comunidade de desenvolvedores, o que facilita a construção de uma API robusta.

- **PostgreSQL:** Escolhemos o `PostgreSQL` como nosso banco de dados relacional devido à sua confiabilidade, escalabilidade e recursos avançados de gerenciamento de dados.

- **Prisma:** Utilizamos o `Prisma` para modelar o esquema do banco de dados de forma declarativa e gerar automaticamente o SQL das tabelas. Isso torna o desenvolvimento mais rápido e simplificado, evitando a necessidade de escrever SQL manualmente.

- **Joi:** A biblioteca `Joi` é utilizada para validar os dados de entrada nas rotas da API, garantindo que apenas informações válidas sejam processadas.

## Como Rodar o Projeto

Siga estas etapas para configurar e executar o projeto em seu ambiente local:

### Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/): Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

- [PostgreSQL](https://www.postgresql.org/): Você precisará de um servidor PostgreSQL instalado e em execução. Você pode baixar o PostgreSQL em [https://www.postgresql.org/download/](https://www.postgresql.org/download/) ou usar um serviço de banco de dados PostgreSQL em nuvem.

### Passos para Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/MoniqueMSouza/LaBoleria

2. **Instale as Dependências:**
    ```bash
    npm install
3. **Iniciar o Servidor:**
    ```bash
    npm start
4. **Acesse a Aplicação:**

O projeto estará disponível em http://localhost:3000.
Use o ThunderClient (ou outra ferramenta para API) para testar as rotas da aplicação.
