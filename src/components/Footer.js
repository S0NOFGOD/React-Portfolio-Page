import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Destiny. All rights reserved.</p>

      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;