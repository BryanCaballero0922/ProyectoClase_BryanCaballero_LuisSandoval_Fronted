import React from 'react';
import CardItem from "../components/CardItem"

function Home() {
  return (
    <div className="container text-center mt-5">
        <h5 className="card-title">Bienvenidos a mi pagina</h5>
        <p className="card-text">
          Bienvenidos a Autoparts University, los mejores repuestos de San Pedro SulA
        </p>
        <img
        src="https://th.bing.com/th/id/OIP.HZ9x9A2ZSl6wPH2u2Xf5xAHaE0?cb=iwp2&rs=1&pid=ImgDetMain"
        alt="Bienvenida"
        className="img-fluid rounded mb-3"
        style={{ maxWidth: '600px' }}
      />
      </div>
    
  );
}

export default Home;
