import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import InputForm from "./InputForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Handle login modal open
  const handleLoginClick = () => {
    if (!isLoggedIn) {
      setIsOpen(true);
    }
  };

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  // ✅ Listen for token changes (after successful login)
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsOpen(false);
  };

  return (
    <div>
      <header>
        <h2>Food Blog</h2>
        <ul>
          <li>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myReceipe"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              My Recipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favReceipe"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Favorites
            </NavLink>
          </li>

          {/* ✅ Show Login OR Logout */}
          <li>
            {isLoggedIn ? (
              <p className="logout" onClick={handleLogout}>
                Logout
              </p>
            ) : (
              <p className="login" onClick={handleLoginClick}>
                Login
              </p>
            )}
          </li>
        </ul>
      </header>

      {/* ✅ Modal only if not logged in */}
      {!isLoggedIn && isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm onLoginSuccess={handleLoginSuccess} />
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
