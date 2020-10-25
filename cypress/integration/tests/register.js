
/// <reference types="Cypress" />

//npx cypress run --record --key d6ce3ebf-0830-4c79-9746-5a1f43fc80af


import BeforeWeStart from '../../pages/beforewestart'
import Homepage from '../../pages/homepage'
import RegisterUserProfile from '../../pages/registeruserprofile'
import Login from '../../pages/login'
import ShopCiiGroup from '../../pages/shopciigroup'

const Chance = require("chance");

const c = new Chance();



after('after',()=>{

    cy.log('after')


})

before('before ',()=>{

    cy.log('before ')


})
 
describe('LoginAndRegisterTests', () => {



    beforeEach('before each',()=>{

        cy.log('before each')


    })

    afterEach('after each',()=>{

        cy.log('after each')


    })

    it('test 1',()=>{
        cy.log('test 1')

    })

    it('login to ciigroup',() =>{

                
        const bws = new BeforeWeStart()
        const hp = new Homepage()
        const rup =  new RegisterUserProfile()
        const ln = new Login()
        const scg = new ShopCiiGroup()

        //cy.log(rup.sum(2,3))

        hp.visit()
        ln.clickLogin()
        ln.fillLoginEmailOrPin('001705261A')
        ln.fillLoginPassword('gogogo')
        ln.fillLoginButton()
          
        cy.wait(3000)

        cy.get('body > section > div:nth-child(1) > aside > header > p').as('pin')
        .should('have.text', '001705261A')  
        .invoke('text')
        .then(sometext => cy.log(sometext));

        /*
        scg.visit()
        scg.clickLogin()
        ln.fillLoginEmailOrPin('001705261A')
        ln.fillLoginPassword('gogogo')
        ln.fillLoginButton()

        cy.get('body > section > div:nth-child(1) > aside > header > p').as('pin')
        .should('have.text', '001705261A')  
        .invoke('text')
        .then(sometext => cy.log(sometext));
        */


    })

    it('RegisterPin', () => {
        
        const bws = new BeforeWeStart()
        const hp = new Homepage()
        const rup =  new RegisterUserProfile()
        const ln = new Login()

        //cy.log(rup.sum(2,3))



        
        hp.visit()
        hp.clickSignup()
        bws.fillFirstName(c.word({ length: 20}))
        bws.fillSurname(c.word({ length: 20}))
        bws.fillDobDay('01')
        bws.fillDobMonth('01')
        bws.fillDobYear('1986')
        bws.fillPostcode('E84AA')
        const e = c.email();
        cy.log(e)
        bws.fillEmailAddress(e)
        bws.fillConfirmEmailAddress(e)
        bws.clickbtnSubmit()

        cy.wait(5000)
        rup.fillPassword('testweb1')
        rup.fillRepeatPassword('testweb1')
        rup.fillDaytimeTelephone('231247383')
        rup.fillExt('3423432')
        rup.fillHomeAddress1('123 address')
        rup.fillHomeAddress2('potters bar')
        rup.fillHomeAddress3('herts')
        rup.fillHomeAddress4('adsd')
        rup.fillHomeAddressCountry('UNITED KINGDOM')
        rup.fillPreferedName('test')
        rup.selectNotInEmployment()
        rup.clickbtnContinue()
    })
  })


