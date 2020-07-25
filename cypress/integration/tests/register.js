
/// <reference types="Cypress" />

//npx cypress run --record --key d6ce3ebf-0830-4c79-9746-5a1f43fc80af


import BeforeWeStart from '../../pages/beforewestart'

import Homepage from '../../pages/homepage'

import RegisterUserProfile from '../../pages/Registeruserprofile'

const Chance = require("chance");
const c = new Chance();



after('after',()=>{

    cy.log('after')


})

before('before ',()=>{

    cy.log('before ')


})

describe('RegisterUser', () => {



    beforeEach('before each',()=>{

        cy.log('before each')


    })

    afterEach('after each',()=>{

        cy.log('after each')


    })

    it('test 1',()=>{
        cy.log('test 1')

    })
    it('RegisterPin', () => {
        
        const bws = new BeforeWeStart()
        const hp = new Homepage()
        const rup =  new RegisterUserProfile()

        hp.visit()
        hp.clickSignup()
        bws.fillFirstName(c.string({min:10,max:20}))
        bws.fillSurname(c.string({min:10,max:20}))
        bws.fillDobDay('01')
        bws.fillDobMonth('01')
        bws.fillDobYear('1986')
        bws.fillPostcode('E84AA')
        const e = c.email();
        cy.log(e)
        bws.fillEmailAddress(e)
        bws.fillConfirmEmailAddress(e)

        

        bws.clickbtnSubmit()
        rup.fillPassword('testweb1')

        





    })
  })


