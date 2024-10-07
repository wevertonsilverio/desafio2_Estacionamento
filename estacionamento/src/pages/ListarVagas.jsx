import React from 'react';
import TabelaVagas from '../components/TabelaVagas';
import "../styles/styles.css"; // Certifique-se de que o caminho para o CSS está correto

const ListarVagas = () => {
  const vagas = [
    { placa: 'ABC1234', nome: 'João Silva', apartamento: '101', bloco: 'A', modelo: 'Fusca', cor: 'Azul', vaga: '1A' },
    { placa: 'XYZ5678', nome: 'Maria Souza', apartamento: '102', bloco: 'B', modelo: 'Civic', cor: 'Preto', vaga: '1B' },
  ];

  return (
    <div className="listar-vagas-container"> {/* Adicione uma classe para estilização */}
      <h2>Listar Vagas</h2>
      <TabelaVagas vagas={vagas} />
    </div>
  );
};

export default ListarVagas;
