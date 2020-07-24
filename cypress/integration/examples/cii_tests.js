/*
/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('www.cii.co.uk')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    describe('CII Login', () => {
      it('Login and get PIN', () => {
        cy.get('[id="login-link"]').click()
  
  
        cy.get('[id="LoginEmail"]').type("ozgurgerilla@gmail.com")
        cy.get('[id="LoginPassword"]').type("gogogo")
  
        cy.get('[id="login"]').click()
  
        cy.get('body > section > div:nth-child(1) > aside > header > p').as('pin')
        .should('have.text', '001705261A')  
        .invoke('text')
          .then(sometext => cy.log(sometext));
  
          cy.screenshot();
  
          expect(true).to.equal(true)
          expect(true).to.equal(true)
  
          
      })
    })
  
  })
  */