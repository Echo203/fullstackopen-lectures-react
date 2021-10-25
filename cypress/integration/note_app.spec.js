describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
  })

  it('Login form can be opened', function() {
    cy.contains('Login').click()
  })

  it('user can log in', function() {
    cy.contains('Login').click()
    cy.get('#username').type('test')
    cy.get('#password').type('test')
    cy.get('#login-button').click()

    cy.contains('Logged as test')
  })
})