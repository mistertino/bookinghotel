import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="logo">BookingApp</span>
        <div className="nav-item">
          <button className="nav-button">Đăng kí</button>
          <button className="nav-button">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
