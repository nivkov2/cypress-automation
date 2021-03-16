/// <reference types="cypress" />

describe("Verify user can ", () => {
    
    it("successfuly login to the EA app", () => {
        cy.visit('http://eaapp.somee.com/')
        cy.contains("Login").click()
        cy.url().should("include", "Account/Login")

        cy.get('#UserName').type("admin")
        cy.get('#Password').type("password")
        cy.get('.btn').click()
        cy.contains("Manage Users")
        cy.contains("Employee Details")
    })
    
})