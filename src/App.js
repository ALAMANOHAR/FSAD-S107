import React, { useState } from "react";
import "./App.css"; // Import the styles

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (email === "" || password === "") {
      alert("Please enter both email and password");
      return;
    }

    // Example login check
    if (email === "admin@example.com" && password === "123456") {
      alert("Login successful!");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
