/// <reference types="Cypress" />


class Login
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

    fillLoginEmailOrPin(value)
    {
        const LoginEmail = cy.get('[id=LoginEmail]')
        LoginEmail.type(value)
        return this
    }

    fillLoginPassword(value)
    {
        const LoginPassword = cy.get('[id=LoginPassword]')
        LoginPassword.type(value)
        return this
    }

    fillLoginButton()
    {
        const LoginButton = cy.get('[id=login]')
        LoginButton.click()
        return this
    }


    loginConduit()
    {
        cy.visit("https://react-redux.realworld.io/#/login")
        cy.get('input[type="email"]').type('ozgurerisir@gmail.com')
        cy.get('input[type="password"]').type('Admin123')
        cy.get('.btn').contains('Sign in').click()
    }








}

export default Login;
