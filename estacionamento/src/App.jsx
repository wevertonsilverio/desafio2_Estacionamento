import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroReserva from './pages/CadastroReserva';
import ListarVagas from './pages/ListarVagas';
import Navbar from './components/Navbar';
import './styles/styles.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CadastroReserva />} />
          <Route path="/listar-vagas" element={<ListarVagas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
