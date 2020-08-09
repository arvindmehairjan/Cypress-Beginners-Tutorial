/// <reference types="cypress" />

it('should navigate to the website', () => {
    // Visit website
   cy.visit('https://www.demoblaze.com/index.html')

    // Click on the sign up button
    cy.get('#signin2').click()
    // Verify sign up page
    cy.get('#signInModalLabel').contains('Sign up')
    // Write the username and the password
    cy.get('#sign-username').type('randomtestudernameoidjwoqjwd')
    cy.get('#sign-password').type('iqhdiqwhdqwwdhwqihd')
})
