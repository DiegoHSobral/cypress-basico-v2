Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Diego')
  cy.get('#lastName').type('Henrique')
  cy.get('#email').type('diegosobral14@gmail.com')
  cy.get('#phone').type('11947664491')
  cy.get('#open-text-area').type('teste')
  cy.contains('button','Enviar').click()
})
