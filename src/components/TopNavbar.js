import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function TopNavbar() {
  const [tipoUsuario, setTipoUsuario] = useState('');
  const location = useLocation();

  useEffect(() => {
    const tipo = localStorage.getItem('tipoUsuario');
    setTipoUsuario(tipo || ''); // fallback por si es null
  }, [location.pathname]); // Se actualiza al cambiar de ruta

  // Oculta el navbar en la ruta /login
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Inicio</Link>
            </li>

            {tipoUsuario === 'admin' && (
              <li className="nav-item">
                <Link className="nav-link" to="/club">Club BR</Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/factura">Facturación</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">Ofertas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;