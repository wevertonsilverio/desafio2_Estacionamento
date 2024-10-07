import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroReserva from './pages/CadastroReserva';
import ListarVagas from './pages/ListarVagas';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadastroReserva />} />
        <Route path="/listar-vagas" element={<ListarVagas />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

