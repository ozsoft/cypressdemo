/// <reference types="Cypress" />


class Homepage
{

    visit()
    {
        cy.visit("https://www.ciigroup.org/en/");
    }

    clickLogin()
    {

        const login = cy.get('[id=login-link]')
        login.click()
        return this

    }

    clickSignup()
    {

        const signup = cy.get('[id=sign-up-link]')
        signup.click()
        return this

    }




}

export default Homepage;
