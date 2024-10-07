import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Cadastro de Reserva</Link>
        </li>
        <li>
          <Link to="/listar-vagas">Listar Vagas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
