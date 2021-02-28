/// <reference types="Cypress" />

describe('API testing',()=>
{
    Cypress.config('baseUrl','http://dummy.restapiexample.com/api/v1')

    it('GET request',()=>
    {
        cy.request('GET','/employees').then((response) =>
        {
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
        })
        

    })

    it('POST create',()=>
    {
        const request = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','/create',request)
        .its('body')
        .its('data')
        //.should('deep.eq',request)
        .should('include',{name:"test"})

    })

    it('PUT update',()=>
    {
        const request = {"name":"oz"}

        cy.request({method: 'PUT', url:'/update/1',body: request,failOnStatusCode:false})
        .its('status').should('eq',200)
        
    })

    it('DELETE removing',() =>
    {
        cy.request('DELETE','delete/2')
        .its('status').should('eq',200)
    })

})


