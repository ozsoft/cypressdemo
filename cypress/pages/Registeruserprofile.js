/// <reference types="Cypress" />


class RegisterUserProfile {

    //Password
    //RepeatPassword
    //Prefix
    //PreferedName    
    //DaytimeTelephone
    //Ext
    //Mobile
    //HomeAddress1
    //HomeAddressPostcode
    //HomeAddress2
    //HomeAddress3
    //HomeAddress4
    //HomeAddressCountry
    // #mainForm > div.login__header.pt-5.pb-5 > div:nth-child(15) > div:nth-child(2) > label > span
    // #mainForm > div.login__header.pt-5.pb-5 > div:nth-child(22) > div.checkbox-column > label > span
    //btnContinue

    sum = (a,b) => a+b; 


    selectNotInEmployment()
    {

        const NotInEmployment = cy.get('[id=notEmployed]')
        NotInEmployment.click({force : true})
        return this

    }
    fillHomeAddress1(value)
    {

        const HomeAddress1 = cy.get('[id=HomeAddress1]')
        HomeAddress1.clear()
        HomeAddress1.type(value)
        return this

    }

    fillHomeAddress1(value)
    {

        const HomeAddress1 = cy.get('[id=HomeAddress1]')
        HomeAddress1.clear()
        HomeAddress1.type(value)
        return this

    }
    fillHomeAddressPostcode(value)
    {

        const HomeAddressPostcode = cy.get('[id=HomeAddressPostcode]')
        HomeAddressPostcode.clear()
        HomeAddressPostcode.type(value)
        return this

    }
    fillHomeAddress2(value)
    {

        const HomeAddress2 = cy.get('[id=HomeAddress2]')
        HomeAddress2.clear()
        HomeAddress2.type(value)
        return this

    }
    fillHomeAddress3(value)
    {

        const HomeAddress3 = cy.get('[id=HomeAddress3]')
        HomeAddress3.clear()
        HomeAddress3.type(value)
        return this

    }
    fillHomeAddress4(value)
    {

        const HomeAddress4 = cy.get('[id=HomeAddress4]')
        HomeAddress4.clear()
        HomeAddress4.type(value)
        return this

    }
    fillHomeAddressCountry(value)
    {

        const HomeAddressCountry = cy.get('[id=HomeAddressCountry]')
        HomeAddressCountry.select(value)
        return this

    }

    fillExt(value)
    {

        const Ext = cy.get('[id=Ext]')
        Ext.clear()
        Ext.type(value)
        return this

    }

    fillDaytimeTelephone(value)
    {

        const DaytimeTelephone = cy.get('[id=DaytimeTelephone]')
        DaytimeTelephone.clear()
        DaytimeTelephone.type(value)
        return this

    }

    fillPreferedName(value)
    {

        const PreferedName = cy.get('[id=PreferedName]')
        PreferedName.clear()
        PreferedName.type(value)
        return this

    }

    fillPrefix(value)
    {

        const Prefix = cy.get('[id=Prefix]')
        Prefix.select(value)
        return this

    }

    fillRepeatPassword(value)
    {

        const RepeatPassword = cy.get('[id=RepeatPassword]')
        RepeatPassword.clear()
        RepeatPassword.type(value)
        return this

    }

    fillPassword(value)
    {

        const Password = cy.get('[id=Password]')
        Password.clear()
        Password.type(value)
        return this

    }

    clickbtnContinue()
    {

        const btnContinue = cy.get('[id=btnContinue]')
        btnContinue.click()
        return this

    }




}

export default RegisterUserProfile;



