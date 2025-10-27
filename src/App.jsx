// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Frases from "./pages/Frases";
import Dicas from "./pages/Dicas";
import EnviarSugestao from "./pages/EnviarSugestao";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/frases" element={<Frases />} />
          <Route path="/dicas" element={<Dicas />} />
          <Route path="/enviar-sugestao" element={<EnviarSugestao />} />
        </Routes>
      </main>
    </>
  );
}
