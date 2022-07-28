import React from "react";
import "./style.scss";

function NavBar({ activeTab, onTabChange }) {
  return (
    <nav>
      <div
        className={activeTab === "home" && "active"}
        id="home"
        onClick={onTabChange}
      >
        Home
      </div>
      <div
        className={activeTab === "about" && "active"}
        id="about"
        onClick={onTabChange}
      >
        About
      </div>
      <div
        className={activeTab === "contact" && "active"}
        id="contact"
        onClick={onTabChange}
      >
        Contact
      </div>
    </nav>
  );
}

export default NavBar;
