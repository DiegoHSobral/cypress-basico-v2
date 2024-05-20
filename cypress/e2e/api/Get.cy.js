import { baseUrl } from './apiConfig';

describe('Testes de API', () => {

  it('Deve validar o endpoint GET', () => {
    cy.request('GET', baseUrl)
      .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.body).to.not.be.empty;

      });
  });
});


