/// <reference types="cypress" />

describe("Verify user can ", () => {

    it("manage registered users", () => {
        // login to the app 
        cy.visit('http://eaapp.somee.com/')

        // cy.get("#loginLink").then((loginLink) => {
        //     const linkText = loginLink.text()
        //     expect(linkText).to.equal("Login")
        // }).click()

        // Promise 

        // cy.get("#loginLink").then((loginLink) => {
        //     return loginLink.text()
        // }).as("loginLinkText")

        cy.get("#loginLink").invoke("text").as("loginLinkText")

        cy.get("#loginLink").click()

        cy.get("@loginLinkText").then((text) => {
            expect(text).to.eql("Login")
        })


        cy.url().should("include", "Account/Login")

        cy.get('#UserName').type("admin")
        cy.get('#Password').type("password")
        cy.get('.btn').click()
        cy.contains("Manage Users")
        cy.contains("Employee Details")

        //get to the users table
        cy.contains("Employee List").click()
        cy.get(".table").find('tr').as("rows")

        cy.get(".table").find('tr').contains("Prashanth").parent().contains("Benefits").click()
        
        cy.get("h2").then((label) => {
            expect(label.text()).to.equal(" Benefits Listed for Prashanth")
        })


        cy.get(".table").find('tr').then((row) => {
            cy.wrap(row).click({ multiple: true })
        })

        // Verify the valur from a property 
        cy.wrap({ name: 'JhonDoe' }).should('have.property', 'name').and('eq', 'JhonDoe')


    })

})