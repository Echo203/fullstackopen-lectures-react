describe('Note app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3000/api/testing/reset')
    const user = {
      username: 'test',
      password: 'test'
    }
    cy.request('POST', 'http://localhost:3000/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
  })

  it.only('login fails with wrong password', function() {
    cy.contains('Login').click()
    cy.get('#username').type('test')
    cy.get('#password').type('wrongPassword')
    cy.get('#login-button').click()

    cy.contains('Wrong Credentials')
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

  describe('When logged in', function() {
    beforeEach(function() {
      cy.contains('Login').click()
      cy.get('#username').type('test')
      cy.get('#password').type('test')
      cy.get('#login-button').click()
    })

    it('new note can be added', function() {
      cy.contains('Add note').click()
      cy.get('input').type('New note added by cypress')
      cy.contains('save').click()
      cy.contains('New note added by cypress')
    })

    describe('and a note exist', function() {
      beforeEach(function () {
        cy.contains('Add note').click()
        cy.get('input').type('another cypress note')
        cy.contains('save').click()
      })

      it('it can be made important', function() {
        cy.contains('another cypress note')
          .contains('make important')
          .click()

        cy.contains('another cypress note')
          .contains('make not important')
      })
    })
  })
})