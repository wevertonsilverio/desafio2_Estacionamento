import React, { useState } from "react";
import "../styles/styles.css";

const CadastroReserva = () => {
  const [placa, setPlaca] = useState("");
  const [nome, setNome] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [bloco, setBloco] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [vaga, setVaga] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dadosReserva = {
      placa,
      nome,
      apartamento,
      bloco,
      modelo,
      cor,
      vaga,
    };

    console.log(dadosReserva);

    alert("Cadastro realizado com sucesso!");

    setPlaca("");
    setNome("");
    setApartamento("");
    setBloco("");
    setModelo("");
    setCor("");
    setVaga("");
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Reserva</h2>
      <form onSubmit={handleSubmit}> {/* Adicione o onSubmit aqui */}
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
          placeholder="Placa do Veículo:"
        />
        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
          placeholder="Modelo do Veículo:"
        />
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          placeholder="Nome do Proprietário:"
        />
        <input
          type="text"
          value={cor}
          onChange={(e) => setCor(e.target.value)}
          required
          placeholder="Cor do Veículo:"
        />
        <input
          type="text"
          value={apartamento}
          onChange={(e) => setApartamento(e.target.value)}
          required
          placeholder="Número do Apartamento:"
        />
        <input
          type="text"
          value={vaga}
          onChange={(e) => setVaga(e.target.value)}
          required
          placeholder="Número da Vaga:"
        />
        <input
          type="text"
          value={bloco}
          onChange={(e) => setBloco(e.target.value)}
          required
          placeholder="Bloco do Apartamento:"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CadastroReserva;
