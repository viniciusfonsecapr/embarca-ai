describe('Home Page', () => {
  it('should load the home page', () => {
    cy.visit('/');
    cy.contains('PERSONAGENS').should('be.visible');
  });
  it('should load the home page', () => {
    cy.visit('/');
    cy.contains('Buscar').should('be.visible');
  });

});
