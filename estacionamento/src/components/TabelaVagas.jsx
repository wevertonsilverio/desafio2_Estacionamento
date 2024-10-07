import React from 'react';

const TabelaVagas = ({ vagas }) => {
// No componente TabelaVagas.js, adicione uma classe à tabela
return (
  <table className="tabela-vagas">
    <thead>
      <tr>
        <th>Placa</th>
        <th>Nome</th>
        <th>Apartamento</th>
        <th>Bloco</th>
        <th>Modelo</th>
        <th>Cor</th>
        <th>Vaga</th>
      </tr>
    </thead>
    <tbody>
      {vagas.map((vaga, index) => (
        <tr key={index}>
          <td>{vaga.placa}</td>
          <td>{vaga.nome}</td>
          <td>{vaga.apartamento}</td>
          <td>{vaga.bloco}</td>
          <td>{vaga.modelo}</td>
          <td>{vaga.cor}</td>
          <td>{vaga.vaga}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

};

export default TabelaVagas;
