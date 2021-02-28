/// <reference types="Cypress" />

describe("",()=>
{
    it("Signin",()=>
    {
        cy.visit("https://react-redux.realworld.io/#/login")
        cy.get('input[type="email"]').type('ozgurerisir@gmail.com')
        cy.get('input[type="password"]').type('Admin123')
        //cy.get('.btn').contains('Sign in').click()
        

        cy.get('input[type="email"]').parents('form').find('.btn').get('[placeholder="Password"]')
    })
})