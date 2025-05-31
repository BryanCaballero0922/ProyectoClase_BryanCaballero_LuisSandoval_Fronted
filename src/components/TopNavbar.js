import { Link } from "react-router-dom";
import React from 'react';

//function TopNavbar(){


    //return (

        //<div className="navbar navbar-expand-lg bg-body-tertiary">
         // <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
          // aria-expanded="false" aria-label="Toggle navigation">
           // Menu
    //</button>

    //<div className="navbar bg-body-tertiary justify-content-center">
  //<form className="d-flex" role="search">
    //    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
      //  <button className="btn btn-outline-success" type="submit">Buscar</button>
      //</form>

            
        //    <div className="collapse navbar-collapse" id="navbarNav">
      //<ul className="navbar-nav">
       //<li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
         // <li className="nav-item"><Link className="nav-link" to="/contactos">Contactos</Link></li>
          //<li className="nav-item"><Link className="nav-link" to="/club">Club Americans</Link></li>
          //<li className="nav-item"><Link className="nav-link" to="/ofertas">Ofertas</Link></li>
      //</ul>
      //</div>
    //</div>
  //</div>
  
    //)

    //}
 //export default TopNavbar;

 //import { Link } from "react-router-dom";
//import React from 'react';

//Nose cual estilo te gusta mas si el que temos o el que hice

function TopNavbar() {
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
            <li className="nav-item"><Link className="nav-link" to="/contactos">Contactos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/club">Club Americans</Link></li>
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
