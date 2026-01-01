import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import InputForm from "./InputForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  // ✅ Handle protected link click (like My Recipe)
  const handleProtectedClick = (path) => {
    if (!isLoggedIn) {
      setIsOpen(true); // open login modal
    } else {
      navigate(path); // navigate if logged in
    }
  };

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsOpen(false);
    navigate("/"); // redirect to home
  };

  // ✅ When login succeeds
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
            <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </NavLink>
          </li>

          {/* ✅ Secure My Recipe */}
          <li>
            <p
              style={{ cursor: "pointer", margin: 0 }}
              onClick={() => handleProtectedClick("/myReceipe")}
            >
              My Recipe
            </p>
          </li>

          {/* ✅ Secure Favorites */}
          <li>
            <p
              style={{ cursor: "pointer", margin: 0 }}
              onClick={() => handleProtectedClick("/favReceipe")}
            >
              Favorites
            </p>
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

      {/* ✅ Show login modal if not logged in */}
      {!isLoggedIn && isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm onLoginSuccess={handleLoginSuccess} />
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
