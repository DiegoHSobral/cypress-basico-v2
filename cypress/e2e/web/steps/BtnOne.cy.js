import HomePage from "../pages/HomePage";
import FunctionsBtnOne from "../pages/FunctionsBtnOne";

describe('Teste de Botões na Página Desafiadora', () => {
    beforeEach(() => {
        HomePage.visit();
    });

    it('Deve clicar no botão com texto dinamico', () => {
        FunctionsBtnOne.clickTextOne();
    });

    it('Deve clicar no botão de editar e validar URL', () => {
        FunctionsBtnOne.btnEditOne();
        FunctionsBtnOne.validateUrlAfterEdit();
    });

    it('Deve clicar no botão de deletar e validar URL', () => {
        FunctionsBtnOne.btnDeleteOne();
        FunctionsBtnOne.validateUrlAfterDelete();
    });
});

