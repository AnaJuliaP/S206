/// <reference = cypress>

describe('Criando cenários de testes para o site da Product Store', () => {
  it('Deve filtrar por laptops e selecionar o primeiro laptop', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.contains('Laptops', {timeout: 20000}).click();
    cy.get('.card-title').first().should('contain.text', 'Sony vaio i5');
  });

  it('Deve filtrar por monitor e selecionar o primeiro monitor', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.contains('Monitor', {timeout: 20000}).click();
    cy.get('.card-title').first().should('contain.text', '');
  });

  it('Deve abrir a página de um produto', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('.card-title').first().click();
    cy.should('contain.text', 'Samsung galaxy s6');
  });

  it('Deve realizar uma compra', {defaultCommandTimeout: 10000}, () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('.card-title').first().click();
    cy.get('.hrefch').first().click();
    cy.contains('Add to cart').click();
  });

  it('Deve ser capaz de realizar login', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#login2').click();
    cy.get('#loginusername').type('anajuliap');
    cy.get('#loginpassword').type('12345aj');
    cy.get('.btn.btn-primary').contains('Log in').click();
  });

  it('Deve falhar ao realizar login se as credenciais forem inválidas', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#login2').click();
    cy.get('#loginusername').type('usuario_invalido');
    cy.get('#loginpassword').type('senha_invalida');
    cy.get('.btn.btn-primary').contains('Log in').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Wrong password.')
    })
  });
});

