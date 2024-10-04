import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn,user } = useAuth();

  return (
    <>
      <header>
        <div className="container" id="navbar-container">
          <div className="logo-brand">
            <img src="/lion-logo.png" width={50} height={50} />
            <span className="header-text">ROSSSH TECHNICAL</span>
          </div>
          <nav className="navbar-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            {user.isAdmin ? (
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            ):("")}
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
