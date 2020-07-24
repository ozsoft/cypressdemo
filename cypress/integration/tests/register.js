
/// <reference types="Cypress" />


import BeforeWeStart from '../../pages/beforewestart'

const Chance = require("chance");
const c = new Chance();

describe('RegisterUser', () => {
    it('RegisterPin', () => {



        
        const bws = new BeforeWeStart()
        bws.visit()
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

        





    })
  })


