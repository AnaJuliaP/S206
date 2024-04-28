/// <reference = cypress>

describe('Teste de criação, registro e login', () => {
  it('Teste de criação de usuario com sucesso', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("anajuliap")
    cy.get('#Text1').type("anajuliap")
    cy.get('#username').type("anajuliap")
    cy.get('#password').type("anajuliap")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
  })

  it('Teste de criação de usuario com falha', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("anajuliap")
    cy.get('#Text1').type("anajuliap")
    cy.get('#username').type("anajuliap")
    cy.get('.btn-primary').should("be.disabled")
  })

  it('Teste de login com sucesso', () => {
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", infos[0])

  })

  it('Teste deletar usuario', () => {
    let info = loginUsuario()
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Username or password is incorrect' )
  })


})

function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let ID = hora + minuto + seg + "ID"
  let Senha = hora + minuto + seg + "Senha"
  let infos = [ID, Senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(Senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")
  return infos
}

function loginUsuario() {

  let info = criarUser()
  cy.get('#username').type(info[0])
  cy.get('#password').type(info[1])
  cy.get('.btn-primary').click()
  cy.get('h1.ng-binding').should('contain.text', info[0])

  return info;
}