import React from "react";
import { Link } from "react-router-dom";
import About from './About.js'; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            Posts Table
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
