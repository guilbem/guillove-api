import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#e47f7f", padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#fff" }}>Guillove</h1>
      <nav>
        <Link to="/" style={{ margin: "0 20px", color: "#fff" }}>Home</Link>
        <Link to="/frases" style={{ margin: "0 20px", color: "#fff" }}>Frases</Link>
        <Link to="/dicas" style={{ margin: "0 20px", color: "#fff" }}>Dicas</Link>
        <Link to="/enviar-sugestao" style={{ margin: "0 20px", color: "#fff" }}>Enviar Sugestão</Link>
      </nav>
    </header>
  );
};

export default Header;
