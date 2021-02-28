
// <reference types="Cypress" />
/*
require('@cypress/skip-test/support')


    describe('QUALBUILDER', () => {
      it('Qual', () => {

        cy.skipOn('chrome')

//https://shop.ciigroup.org/qualbuilder
        cy.visit('www.ciigroup.org');

        //host file pointing to SRV-ALD-SIT02

        cy.get('[id="login-link"]').click()
  
  
        cy.get('[id="LoginEmail"]').type("001732373D")
        cy.get('[id="LoginPassword"]').type("*****")
  
        cy.get('[id="login"]').click()
  
        cy.get('body > section > div:nth-child(1) > aside > header > p').as('pin')
        .should('have.text', '001732373D')  
        .invoke('text')
          .then(sometext => cy.log(sometext));
  
          cy.screenshot();
  


      })
    })


    
  
    /*
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
    */
  
  
