class FunctionsBtnOne {
    clickTextOne() {
        var elemento = document.querySelector("#\\34 f3cb750-f757-013c-a5d1-22ad94c4e808");
        if (elemento) {
            elemento.click();
            console.log("Elemento 'one' encontrado e clicado:", elemento);
        } else {
            console.log("Elemento 'one' não encontrado.");
        }
    }

    btnEditOne() {
        cy.contains('a', 'edit').click();
    }

    btnDeleteOne() {
        cy.contains('a', 'delete').click();
    }

    validateUrlAfterEdit() {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#edit');
    }

    validateUrlAfterDelete() {
        cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom#delete');
    }
}

export default new FunctionsBtnOne();
