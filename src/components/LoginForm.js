import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
  handleLogin,
  handleUsernameChange,
  hadnlePasswordChange,
  username,
  password,
}) => {
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    handleLogin(username, password)
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <div>
        Username:
        <input
          id='username'
          type="text"
          value={username}
          name="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        Password:
        <input
          id='password'
          type="text"
          value={password}
          vame="Password"
          onChange={hadnlePasswordChange}
        />
      </div>
      <button type="submit" id='login-button'>Log in</button>
    </form>
  )
}

export default LoginForm

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  hadnlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
