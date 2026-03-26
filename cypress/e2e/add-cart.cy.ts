describe('add product to cart', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('passes be able to navigate to the product page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.col-span-6 > .object-contain').click()
    cy.contains("Adicionar ao carrinho").should('be.visible').click()
  })

  it('updates cart counter after adding one product', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Cart (0)').should('be.visible')
    cy.get('.col-span-6 > .object-contain').click()
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('be.visible')
  })

  it('searches a product and navigates to results page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[placeholder="Buscar produtos..."]').type('Moletom{enter}')
    cy.url().should('include', '/search?query=Moletom')
    cy.contains('Busca por: Moletom').should('be.visible')
  })
})