import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h2>Bem-vindo ao Guil Love</h2>
      <p>Um site com frases inspiradoras e dicas de amor.</p>
      <div style={{ marginTop: "30px" }}>
        <Link to="/frases" style={{ margin: "10px", display: "inline-block" }}>Frases</Link>
        <Link to="/dicas" style={{ margin: "10px", display: "inline-block" }}>Dicas</Link>
        <Link to="/enviar-sugestao" style={{ margin: "10px", display: "inline-block" }}>Enviar Sugestão</Link>
      </div>
    </main>
  );
};

export default Landing;
