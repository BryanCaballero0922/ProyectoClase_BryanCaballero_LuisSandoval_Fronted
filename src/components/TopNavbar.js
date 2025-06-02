import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function TopNavbar() {
  const [tipoUsuario, setTipoUsuario] = useState('');

  useEffect(() => {
    const tipo = localStorage.getItem('tipoUsuario');
    setTipoUsuario(tipo);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>

         
            {tipoUsuario === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/contactos">Facturación</Link>
              </li>
            )}

            <li className="nav-item"><Link className="nav-link" to="/club">Club BR</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ofertas">Ofertas</Link></li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;