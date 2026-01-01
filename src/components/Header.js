import React from "react";
import "./Header.css"; // optional separate CSS
import Image from "../assets/sam.jpg"

function Header() {
  return (
    <header className="header">
      <img src={Image} alt="Destiny pics" className="profile-pic" />
      <h1>Hi, I’m Destiny 👋</h1>
      <p>
        I build modern websites and apps using HTML, CSS, JavaScript & React.
      </p>
      <span className="tagline">Frontend Developer & Designer</span>
    </header>
  );
}

export default Header;