describe('Home page test example', () => {

  it('Navigate to google.com', () => {
    const url = Cypress.env("one_url");
    cy.visit(url)
  })

});