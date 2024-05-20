import FunctionsBtnOne from "../pages/FunctionsBtnOne";
import FunctionsBtnTwo from "../pages/FunctionsBtnTwo";
import HomePage from "../pages/HomePage";

describe('Segundo botão na Página Desafiadora', () => {
    beforeEach(() => {
        HomePage.visit();
    });

    it('Deve clicar no segundo botão', () => {
        FunctionsBtnTwo.clickTextTwo

    });

    it('Deve clicar no botão de editar e validar URL', () => {
        FunctionsBtnTwo.btnEditTwo
        FunctionsBtnOne.validateUrlAfterEdit
    });

    it('Deve clicar no botão de deletar e validar URL', () => {
        FunctionsBtnTwo.btnDeleteTwo
        FunctionsBtnOne.validateUrlAfterDelete

    });
});
