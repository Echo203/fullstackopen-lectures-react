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

  it('login fails with wrong password', function() {
    cy.contains('Login').click()
    cy.get('#username').type('test')
    cy.get('#password').type('wrongPassword')
    cy.get('#login-button').click()

    cy.get('.error')
      .should('contain', 'Wrong Credentials')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Logged as test')
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
      cy.login({ username: 'test', password: 'test' })
    })
    it('new note can be added', function() {
      cy.contains('Add note').click()
      cy.get('input').type('New note added by cypress')
      cy.contains('save').click()
      cy.contains('New note added by cypress')
    })

    describe('and a note exist', function() {
      beforeEach(function () {
        cy.createNote({
          content: 'another cypress note',
          important: false
        })
      })

      it('it can be made important', function() {
        cy.contains('another cypress note').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make not important')
      })
    })
    describe('and several notes exist', function () {
      beforeEach(function () {
        cy.createNote({ content: 'first note', important: false })
        cy.createNote({ content: 'second note', important: false })
        cy.createNote({ content: 'third note', important: false })
      })

      it('one of those can be made important', function () {
        cy.contains('second note').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make not important')
      })
    })
  })
})

