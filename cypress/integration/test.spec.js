/// <reference types="cypress" />

it('should create a new account for the ecommerce website', () => {
    // Visit website
   cy.visit('https://www.demoblaze.com/index.html')

    // Click on the sign up button
    cy.get('#signin2').click()

    // Verify sign up page
    cy.get('#signInModalLabel').contains('Sign up')

    cy.wait(2000)
    // Write the username and the password
    cy.get('#sign-username').type('iamarandomuser123456')
    cy.get('#sign-password').type('iuwqhdiqwqw')

    // Click on the Sign up button
    cy.get('button').contains('Sign up').click()

    // Verify alert message
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Sign up successful.')
    })
})
