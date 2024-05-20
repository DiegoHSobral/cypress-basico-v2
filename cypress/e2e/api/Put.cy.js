const faker = require('faker');

import { baseUrl } from './apiConfig';

describe('Testes de API', () => {

  it('Deve validar o endpoint PUT', () => {
    const updatedUser = {
      name: faker.name.firstName(),
      email: faker.internet.email(),

    };

    const schema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },

      },
      required: ['name', 'email']
    };

    cy.request({
      method: 'PUT',
      url: `${baseUrl}/1`,
      body: updatedUser,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((putResponse) => {
      expect(putResponse.status).to.equal(200);


    });
  });
});






