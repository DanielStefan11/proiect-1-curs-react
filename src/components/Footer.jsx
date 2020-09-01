import React from "react";
import "./styling/Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer-container">
      <p>Proiectul 1</p>
      <p>Admin Panel</p>
      <p className="year">{year}</p>
    </footer>
  );
}

export default Footer;
