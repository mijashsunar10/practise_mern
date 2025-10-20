import React, { useState } from "react";
import axios from "axios";

export default function InputForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const userData = isSignUp
      ? { name, email, password }
      : { email, password };

    try {
      const url = isSignUp
        ? "http://localhost:3000/api/register"
        : "http://localhost:3000/api/login";

      const { data } = await axios.post(url, userData);

      setMessage(data.message || "Success!");

      // ✅ If login success, store token
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("✅ Token saved:", data.token);
        onLoginSuccess?.(); // 🔥 Notify parent (Navbar)
      }
    } catch (error) {
      console.error("❌ Error:", error);
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      {isSignUp && (
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">
        {isSignUp ? "Sign Up" : "Login"}
      </button>
      <br />

      <p
        onClick={() => {
          setIsSignUp(!isSignUp);
          setMessage("");
        }}
        style={{ cursor: "pointer", color: "blue" }}
      >
        {isSignUp
          ? "Already have an account? Login"
          : "Create a new account"}
      </p>
      <br />

      {message && <p style={{ color: "green" }}>{message}</p>}
    </form>
  );
}
