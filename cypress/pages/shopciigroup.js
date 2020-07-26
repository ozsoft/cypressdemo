/// <reference types="Cypress" />


class ShopCiiGroup
{

    visit()
    {
        cy.visit("https://shop.ciigroup.org/");
    }

    clickLogin()
    {

        const login = cy.get("body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(1) > a")
        login.click()
        return this

    }





}

export default ShopCiiGroup;
