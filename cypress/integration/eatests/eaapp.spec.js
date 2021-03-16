/// <reference types="cypress" />

describe("Verify user can ", () => {

    before('Open the web site', () => {
        cy.visit('http://eaapp.somee.com/')
        cy.fixture("ea.user").as('user')
    })
    
    it("successfuly login to the EA app", () => {

        cy.get("@user").then((user) => {
            cy.login(user.userName, user.password)
        }) 
        cy.contains("Manage Users")
        cy.contains("Employee Details")
    })
    
})