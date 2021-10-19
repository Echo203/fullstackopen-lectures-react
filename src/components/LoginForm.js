import react from "react";

const LoginForm = ({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleLogin,
}) => {
  return (
    <form onSubmit={handleLogin}>
      <div>
        Username:
        <input
          type="text"
          value={username}
          name="Username"
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        Password:
        <input
          type="text"
          value={password}
          vame="Password"
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
