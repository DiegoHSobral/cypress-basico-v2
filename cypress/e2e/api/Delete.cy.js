
import { baseUrl } from './apiConfig';

describe('Testes de API', () => {

    it('Deve validar o endpoint DELETE', () => {
        cy.request('DELETE', `${baseUrl}/1`)
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.empty;
            });
    });
});
    