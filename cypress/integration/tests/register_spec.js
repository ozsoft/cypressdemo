/// <reference types="Cypress" />

//npx cypress run --record --key d6ce3ebf-0830-4c79-9746-5a1f43fc80af


import BeforeWeStart from '../../pages/beforewestart'
import Homepage from '../../pages/homepage'
import RegisterUserProfile from '../../pages/registeruserprofile'
import Login from '../../pages/login'
import ShopCiiGroup from '../../pages/shopciigroup'

const Chance = require("chance");

const c = new Chance();


function addNumbers(n1,n2)
{
    return n1+n2;
}

describe('a new set of google tests', () => {
    it('go to google main site', ()=>{
        cy.visit('http://www.google.com')
        let numbers = addNumbers(10,20)
        cy.log(numbers)
        cy.title().should('include','Google')
        
    })  
})


describe('before and after tests',() =>{
    after('after',()=>{

        cy.log('after')

    })
    
    before('before ',()=>{
    
        cy.log('before ')

    })
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


    it('writing testing function',() =>{
        var i;

        for(i = 0; i<10; i++)
        {
            cy.log('print something to the log')
        }
    })


    it('formy test',()=>{

        cy.visit('https://formy-project.herokuapp.com/form')
        cy.get('#first-name').type('sometest')

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

        cy.get('body > section > div:nth-child(1) > aside > header > p')
        .children()
        
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

  })


