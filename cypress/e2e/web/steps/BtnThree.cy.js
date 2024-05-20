import FunctionsBtnOne from "../pages/FunctionsBtnOne";
import FunctionsBtnThree from "../pages/FunctionsBtnThree";
import HomePage from "../pages/HomePage";



describe('terceiro botão na Página Desafiadora', () => {
    beforeEach(() => {
        HomePage.visit
    });

    it('Deve clicar no teceiro botão', () => {
        FunctionsBtnThree.clickTextThree

    });

    it('Deve clicar no botão de editar e validar URL', () => {
        FunctionsBtnThree.btnEditThree
        FunctionsBtnOne.validateUrlAfterEdit
    });

    it('Deve clicar no botão de deletar e validar URL', () => {
        FunctionsBtnThree.btnEditThree
        FunctionsBtnOne.validateUrlAfterDelete
    });
});
