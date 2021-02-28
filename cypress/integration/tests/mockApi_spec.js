
/// <reference types="Cypress" />



describe('tests around mock api',()=>
{
    beforeEach('login to the app',()=>
    {
        cy.server()
        cy.route('GET','**/tags','fixture:tags.json')
        cy.loginToApplication() //not implemented
        
    })

    it('test',() =>
    {
        cy.get('.tag-list')
        .should('contain','cypress')
        .and('contain','automation')
        .and('contain','testing')
        .and('contain','SDET')

    })





})

