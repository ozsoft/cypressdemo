/// <reference types="Cypress" />


class BeforeWeStart
{

    visit()
    {
        cy.visit("https://www.ciigroup.org/en/membership/before-we-start/");
    }

    fillFirstName(value)
    {

        const firstName = cy.get('[id=FirstName]');
        firstName.clear();
        firstName.type(value);
        return this

    }


    
    fillSurname(value)
    {

        const Surname = cy.get('[id=Surname]');
        Surname.clear();
        Surname.type(value);
        return this

    }


        
    fillPostcode(value)
    {

        const Postcode = cy.get('[id=Postcode]');
        Postcode.clear();
        Postcode.type(value);
        return this

    }


    fillEmailAddress(value)
    {

        const EmailAddress = cy.get('[id=EmailAddress]');
        EmailAddress.clear();
        EmailAddress.type(value);
        return this

    }

    fillConfirmEmailAddress(value)
    {

        const ConfirmEmailAddress = cy.get('[id=ConfirmEmailAddress]');
        ConfirmEmailAddress.clear();
        ConfirmEmailAddress.type(value);
        return this

    }

    fillDobDay(value)
    {

        const DobDay = cy.get('[id=DobDay]');
        DobDay.select(value);
        return this

    }

    fillDobMonth(value)
    {

        const DobMonth = cy.get('[id=DobMonth]');
        DobMonth.select(value);
        return this

    }

    fillDobYear(value)
    {

        const DobYear = cy.get('[id=DobYear]');
        DobYear.select(value);
        return this

    }

    clickbtnSubmit(value)
    {

        const btnSubmit = cy.get('[id=btnSubmit]');
        btnSubmit.click();
        return this

    }



}

export default BeforeWeStart;
