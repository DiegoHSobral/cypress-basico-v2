class FunctionsBtnThree {
    clickTextThree() {
        var elemento = document.querySelector("#\\38 a3754f0-f757-013c-a5e7-22ad94c4e808 > font > font");
        if (elemento) {
            elemento.click();
            console.log("Elemento 'two' encontrado e clicado:", elemento);
        } else {
            console.log("Elemento 'two' não encontrado.");
        }
    }

    btnEditThree() {
        cy.get('[href="#edit"]').eq(2).click();
    }

    btnDeleteThree() {
        cy.get('[href="#delete"]').eq(6).click();
    }
}

export default new FunctionsBtnThree();
