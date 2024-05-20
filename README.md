# Projeto de Testes com Cypress

Este projeto é um exemplo simples de como usar o framework de teste Cypress para automatizar testes em uma aplicação web e api.

## Pré-requisitos

- Node.js instalado

## Instalação

1. Clone este repositório:
https://github.com/DiegoHSobral/parana-test.git


2. Navegue até o diretório do projeto:
cd nome-do-repositorio

3. Instale as dependências:
npm install

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

npm run cypress:open
Isso abrirá a interface do Cypress, onde você poderá escolher e executar os testes.

## Estrutura do Projeto

- **cypress/e2e/**: Este diretório contém os arquivos de teste Cypress.
- **cypress/support/**: Este diretório contém arquivos de suporte, como comandos personalizados e configurações.
- **cypress/plugins/**: Este diretório contém arquivos de plugins Cypress.
- **cypress.json**: Arquivo de configuração principal do Cypress.

## Dados Falsos (Fake Data)

Os testes deste projeto utilizam dados falsos para garantir que sejam independentes de qualquer ambiente específico ou de dados reais. Para gerar esses dados falsos, usamos a biblioteca Faker.js, que nos permite criar facilmente informações falsas em diferentes formatos, como nomes, endereços, e-mails, etc...

### Exemplo de Uso

```javascript
import faker from 'faker';

const fakeName = faker.name.findName();
const fakeEmail = faker.internet.email();
const fakeAddress = faker.address.streetAddress();

describe('Exemplo de teste com dados falsos', () => {
    it('Deve preencher um formulário com dados falsos', () => {
        cy.get('#name').type(fakeName);
        cy.get('#email').type(fakeEmail);
        cy.get('#address').type(fakeAddress);

        // Continuar com as asserções e ações de teste
    });
});
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Este formato condensa todas as informações importantes em uma única página, tornando mais fácil para os usuários encontrarem o que precisam.  
