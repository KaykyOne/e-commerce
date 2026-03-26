describe('add product to cart', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('searches a product and navigates to results page', () => {
    cy.searchProduct('Moletom')
  })

})