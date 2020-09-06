import React from "react";
import "./Header.css";
import logo from "../../images/social-buddy.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Social Buddy" />
    </div>
  );
};

export default Header;
