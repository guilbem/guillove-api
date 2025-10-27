import React from "react";

const EnviarSugestao = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Enviar Sugestão</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" />
        </div>
        <div>
          <label>Sugestão:</label>
          <textarea />
        </div>
        <div>
          <label>Categoria:</label>
          <select>
            <option value="">Selecione</option>
            <option value="frases">Frases</option>
            <option value="dicas">Dicas</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default EnviarSugestao;
