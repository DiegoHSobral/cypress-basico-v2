class HomePage {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom');
    }
}

export default new HomePage();
