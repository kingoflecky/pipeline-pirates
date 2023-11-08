import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Perform custom authentication logic here
      // This could involve verifying credentials against a local database or an external authentication service

      // If authentication is successful, store the user's information in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("accessToken", "YOUR_CUSTOM_ACCESS_TOKEN");

      // Redirect the user to the dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <div className="Login">
      <h1>Welcome, please sign in</h1>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>

        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label>Password:</label>

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;