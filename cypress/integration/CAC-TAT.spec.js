/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    
  beforeEach(function(){
    cy.visit('./src/index.html')

})
  it('verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
 })
  it('preencre os campos obrigatorios e enviar o formulario', function(){
   // serve para digitar texto longos
    const longText = 'teste, teste, teste, teste'
    //  cy.get serve para filtra um elemento 
    //  .type serve para digitar texto
    cy.get('#firstName').type('Diego')
    cy.get('#lastName').type('Henrique')
    cy.get('#email').type('diegosobral14@gmail.com')
    cy.get('#phone').type('11947664491')
    cy.get('#open-text-area').type(longText, { delay: 0} )
    //serve para buscar um unico texto na tela 
    cy.contains('button','Enviar').click()
    // serve para validar um cenario de sucesso 
    cy.get('.success').should('be.visible')
 })
 it('exibe menssagem de erro ao submeter o formulario com um email com formatação invalida', function(){
    cy.get('#firstName').type('Diego')
    cy.get('#lastName').type('Henrique')
    cy.get('#email').type('diegosobral14@gmail,com')
    cy.get('#phone').type('11947664491')
    cy.get('#open-text-area').type('reste' )
    cy.contains('button','Enviar').click()
    //serve para validar um cenario de erro 
    cy.get('.error').should('be.visible')
 })

 it('campo telefone continua vazio quando preenchido com valor não numerico', function(){
       cy.get('#phone').type('çlkjhjklç')
       .should('have.value','')
 })

 it('exibe mensagem de erro quando o telefone se torna obrigatorio mas não é preenchido', function(){
    cy.get('#firstName').type('Diego')
    cy.get('#lastName').type('Henrique')
    cy.get('#email').type('diegosobral14@gmail.com')
    cy.get('#phone-checkbox').check()
    //cy.get('#phone').type('11947664491')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()

    cy.get('.error').should('be.visible')
 })

 it(' preenche e limpa os campos nome, e sobrenome email etelefone',function(){
    cy.get('#firstName').type('Diego')
     .should('have.value','Diego')
     // .clear serve para limpar o texto digitado 
     .clear()
     // .should serve para comparar o valor
     .should('have.value','')
    cy.get('#lastName').type('Henrique')
     .should('have.value','Henrique')
     .clear()
     .should('have.value','')
    cy.get('#email').type('diegosobral14@gmail.com')
      .clear()
      .should('have.value','')
    cy.get('#phone')
     .type('1234567890')
     .should('have.value','1234567890')
     .clear()
     .should('have.value','')
    })

 it('exibe mensagem de erro ao submeter o formulario sem preencher os campos obrigatorios',function(){
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
 })
  //metodo criado para deixar em padrao page object 
 it('envia o formulario com sucesso usando um comando customizado', function() {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')

 })
 it(' Seleciona um produto (Mentoria) por texto', function(){
   //.select serve para selecionar uma opção dento de um checkbox
    cy.get('#product').select('Mentoria')
    .should('have.value','mentoria')
    
 })

 it(' Seleciona um produto (youtube) por seu valor (value)', function(){
    //.select serve para selecionar uma opção dento de um checkbox
     cy.get('#product').select('youtube')
     .should('have.value','youtube')
     
  })
  it(' Seleciona um produto (Blog) por seu indice', function(){
    //.select serve para selecionar uma opção dento de um checkbox
     cy.get('#product').select(1)
     .should('have.value','blog')
     
  })

  it(' marca o tipo de atedimento "Feedback"', function(){
    //.check() serve para clicar e marcar uma opção
     cy.get('input[type="radio"][value="feedback"]')
       .check()
       .should('have.value', 'feedback')
     
  })
    it(' marca cada tipo de atendimento', function(){
     cy.get('input[type="radio"]')
     // have.length é verifaçaõ de 2 ou mais funçoes 
     .should('have.length', 3)
     //.each pega todos elementos array
     .each(function($radio){
     //.wrap empacota para ser usado   
     cy.wrap($radio).check()
     cy.wrap($radio).should('be.checked')
})
    })
    it(' marca ambos checkboxes, depois desmarca o ultimo', function(){
        //.check() serve para clicar e marcar uma opção
         cy.get('input[type="checkbox"]')
         .check()
         .should('be.checked')

        //.last serve para pegar só o ultimo   
         .last()
         //.uncheck() serve para desmacar 
         .uncheck()
         .should('not.be.checked')
    })
    it(' Seleciona um arquivo da pasta fixtures', function() {
        cy.get('#file-upload')
          .should('not.have.value')
          //.selectFile serve para selecionar um arquivo 
          .selectFile('./cypress/fixtures/example.json')
          .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
          })
    })
        it(' Seleciona um arquivo simulando um drag-and-drop', function() {
            cy.get('#file-upload')
            .should('not.have.value')
            //serve para selecionar e arrastar um arquivo 
            .selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
          })
        })
        
            
          
          it(' Seleciona um arquivo utilizando uma fixture para qual foi dada um alias', function() {
            cy.fixture('example.json').as('sampleFile')
             cy.get('#file-upload')
             .selectFile('@sampleFile')
             .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
 
             
    })
          })
          it('verifica que a politica de privacidade abre em outra aba sem a necessidade de um clique',function(){
            cy.get('#privacy a').should('have.attr', 'target', '_blank')
            
          })
          it('acessa a página da política de privacidade removendo o target e então clicando no link',function(){
            cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
            cy.contains('Talking About Testing').should('be.visible')

          })
       


})
