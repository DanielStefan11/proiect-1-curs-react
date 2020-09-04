import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3>Călin Daniel Ștefan</h3>
      <Link to="/">Acasă</Link>
      <Link to="/despre">Despre</Link>
    </header>
  );
}

export default Header;
