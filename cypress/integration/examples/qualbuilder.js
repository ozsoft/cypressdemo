
/// <reference types="Cypress" />

    describe('QUALBUILDER', () => {
      it('Qual', () => {


//https://shop.ciigroup.org/qualbuilder
        cy.visit('www.ciigroup.org');

        cy.get('[id="login-link"]').click()
  
  
        cy.get('[id="LoginEmail"]').type("ozgurgerilla@gmail.com")
        cy.get('[id="LoginPassword"]').type("gogogo")
  
        cy.get('[id="login"]').click()
  
        cy.get('body > section > div:nth-child(1) > aside > header > p').as('pin')
        .should('have.text', '001705261A')  
        .invoke('text')
          .then(sometext => cy.log(sometext));
  
          cy.screenshot();
  


      })
    })
  
  
  