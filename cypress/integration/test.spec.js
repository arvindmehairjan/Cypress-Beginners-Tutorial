/// <reference types="cypress" />

describe("Account creation", () => {
    before(() => {
        cy.log('Tests have been started')
    })
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html')
    
        // Click on the sign up button
        cy.get('#signin2').click()
    
        // Verify sign up page
        cy.get('#signInModalLabel').contains('Sign up')
    
        cy.wait(2000)
        // Function that generate a new username with each new test
        function generateNewUsername() {
            let text = "";
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
            for(let i = 0; i < 10; i++) 
            text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
            return text;
        }
    
        const generatedUsername = generateNewUsername()
        // Write the username and the password
        cy.get('#sign-username').type(generatedUsername)
        cy.get('#sign-password').type('randompassword')
    })
    it('should create a new account for the ecommerce website', () => {

        // Click on the Sign up button
        cy.get('button').contains('Sign up').click()
    
        // Verify alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.')
        })
    })
    
    it('should cancel creating the new account for the ecommerce website', () => {
      
        // Click on the close button
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
        // Verify the sign up page is not visible
        cy.get('#signInModalLabel').should('not.be.visible')
    })
    afterEach(() => {
        cy.log('Test has succeeded.')
    })
})

