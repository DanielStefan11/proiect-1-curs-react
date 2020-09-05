import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styling/Header.css";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Călin Daniel Ștefan
      </Link>
      <div>
        <NavLink exact to="/" activeClassName="selected">
          Acasă
        </NavLink>
        <NavLink to="/despre" activeClassName="selected">
          Despre
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
