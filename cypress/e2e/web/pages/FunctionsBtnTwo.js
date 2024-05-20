class FunctionsBtnTwo {

    clickTextTwo() {
        var elemento = document.querySelector("#\\30 fafa540-f761-013c-ad2a-22ad94c4e808 > font > font");
        if (elemento) {
            elemento.click();
            console.log("Elemento 'two' encontrado e clicado:", elemento);
        } else {
            console.log("Elemento 'two' não encontrado.");
        }
    }
    btnEditTwo() {
        cy.get('[href="#edit"]').click();

    }
    btnDeleteTwo() {
        cy.get('[href="#delete"]').click();

    }
}

export default new FunctionsBtnTwo();