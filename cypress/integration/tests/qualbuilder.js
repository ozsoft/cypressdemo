
// <reference types="Cypress" />

require('@cypress/skip-test/support')


    describe('QUALBUILDER', () => {
      it('Qual', () => {

        cy.skipOn('chrome')

//https://shop.ciigroup.org/qualbuilder
        cy.visit('www.ciigroup.org');

        //host file pointing to SRV-ALD-SIT02

        cy.get('[id="login-link"]').click()
  
  
        cy.get('[id="LoginEmail"]').type("001732373D")
        cy.get('[id="LoginPassword"]').type("*****")
  
        cy.get('[id="login"]').click()
  
        cy.get('body > section > div:nth-child(1) > aside > header > p').as('pin')
        .should('have.text', '001732373D')  
        .invoke('text')
          .then(sometext => cy.log(sometext));
  
          cy.screenshot();
  


      })
    })
  
  
  
