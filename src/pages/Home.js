import React from 'react';
import CardItem from "../components/CardItem";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const repuestos = [
    { name: 'Amortiguador Frontal', brand: 'Grob', image: 'https://th.bing.com/th/id/OIP.5YvwT4Hw0ZVXM3TbHtl93AHaD_?rs=1&pid=ImgDetMain' },
    { name: 'Soporte de motor', brand: 'DAI', image: 'https://th.bing.com/th/id/R.1d78fa86073b1508e7b1ae7769d5b384?rik=EtBkUXing5ldgQ&pid=ImgRaw&r=0' },
    { name: 'Brazo estabilizardor', brand: 'Premium', image: 'https://solucionesihd.com/wp-content/uploads/2024/01/BRAZO-ESTABILIZADOR-H1-VAN-THETA-2.4L-ML.jpg' },
    { name: 'Banda de motor', brand: 'Gates', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_786384-MLM45521509837_042021-F.jpg' },
    { name: 'Balinera de rueda', brand: 'Balresa', image: 'https://th.bing.com/th/id/OIP._R4bjarQ0bCPpBnGJoQPYQHaHa?w=2500&h=2500&rs=1&pid=ImgDetMain' },
  ];

  const handleFacturar = () => {
    navigate('/Factura');
  };

  return (
    

      <div className="container">
  <div className="row">
    <div className="col-12">
      <h2 className="text-center bg-primary text-white p-3 rounded">
        Repuestos recien ingresados
      </h2>
    </div>

    {repuestos.map((repuesto, idx) => (
      <div className="col-md-2 mb-2" key={idx}>
        <CardItem {...repuesto} onFacturar={handleFacturar} />
      </div>
          ))}
        </div>
      </div>
    
  );
}

export default Home;

