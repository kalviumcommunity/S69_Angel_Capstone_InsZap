import React from "react";
import { FaSearch } from "react-icons/fa";
import "./home.css";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // 🧭 React Router navigation

  return (
    <div className="home-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={logo} alt="Inszap Logo" className="logo" />
        <p className="description">
          Inszap is your one-stop solution for seamless EV charging. Find,
          connect, and pay at any charging station across India — all from a
          single platform. Get real-time availability and a hassle-free
          charging experience. Power. Connect. Go.
        </p>
        <h1 className="power-up-text">Power Up with Inszap!</h1>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Find Station"
            className="search-input"
          />
        </div>

        {/* Buttons */}
        <button className="auth-button login-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="auth-button signup-button" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Home;
