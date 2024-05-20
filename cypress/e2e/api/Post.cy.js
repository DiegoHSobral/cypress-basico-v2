const faker = require('faker');

import { baseUrl } from './apiConfig';

describe('Testes de API', () => {

  it('Deve validar o endpoint POST com dados dinâmicos', () => {
    const newUser = {
      name: faker.name.findName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      address: {
        street: faker.address.streetName(),
        suite: faker.address.secondaryAddress(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        geo: {
          lat: faker.address.latitude(),
          lng: faker.address.longitude()
        }
      },
      phone: faker.phone.phoneNumber(),
      website: faker.internet.url(),
      company: {
        name: faker.company.companyName(),
        catchPhrase: faker.company.catchPhrase(),
        bs: faker.company.bs()
      }
    };

    cy.request('POST', baseUrl, newUser)
      .then((postResponse) => {
        expect(postResponse.status).to.equal(201);
        expect(postResponse.body).to.deep.include(newUser);
      });
  });
});
