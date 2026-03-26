/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        searchProduct(query: string): Chainable<void>;
    }
}

//
// -- This is a parent command --
Cypress.Commands.add('searchProduct', (query: string) => {
    cy.visit('http://localhost:3000/')
    cy.get('input[placeholder="Buscar produtos..."]').type(`${query}{enter}`)
    cy.url().should('include', `/search?query=${query}`)
    cy.contains(`Busca por: ${query}`).should('be.visible')
})