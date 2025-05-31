import { Link } from "react-router-dom";
import React from 'react';

function TopNavbar(){


    return (

        <div className="navbar navbar-expand-lg bg-body-tertiary">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
           aria-expanded="false" aria-label="Toggle navigation">
            Menu
    </button>

    <div className="navbar bg-body-tertiary justify-content-center">
  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>

            
            <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Club Americans</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Ofertas</a></li>
      </ul>
      </div>
    </div>
  </div>
  
    )

    }
 export default TopNavbar;