import React, { useState } from 'react';
import CardItem from "../components/CardItem";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  const [carrito, setCarrito] = useState([]);

  const productos = [
    { name: 'Amortiguador Frontal', brand: 'Grob', image: 'https://th.bing.com/th/id/OIP.5YvwT4Hw0ZVXM3TbHtl93AHaD_?rs=1&pid=ImgDetMain', price: '$45.00', description: 'Amortiguador delantero para mayor estabilidad y confort.' },
    { name: 'Soporte de motor', brand: 'DAI', image: 'https://th.bing.com/th/id/R.1d78fa86073b1508e7b1ae7769d5b384?rik=EtBkUXing5ldgQ&pid=ImgRaw&r=0', price: '$30.00', description: 'Soporte reforzado para motor compatible con múltiples modelos.' },
    { name: 'Brazo estabilizador', brand: 'Premium', image: 'https://solucionesihd.com/wp-content/uploads/2024/01/BRAZO-ESTABILIZADOR-H1-VAN-THETA-2.4L-ML.jpg', price: '$22.50', description: 'Brazo estabilizador que mejora la suspensión del vehículo.' },
    { name: 'Banda de motor', brand: 'Gates', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_786384-MLM45521509837_042021-F.jpg', price: '$18.00', description: 'Banda de transmisión de alta resistencia para motor.' },
    { name: 'Balinera de rueda', brand: 'Balresa', image: 'https://th.bing.com/th/id/OIP._R4bjarQ0bCPpBnGJoQPYQHaHa?w=2500&h=2500&rs=1&pid=ImgDetMain', price: '$12.75', description: 'Balinera de rueda para vehículos livianos y medianos.' }
  ];

  const nuevosRepuestos = [
    { name: 'Filtro de aire', brand: 'Bosch', image: 'https://http2.mlstatic.com/D_NQ_NP_707748-MLA31604241224_072019-O.webp', price: '$9.90', description: 'Filtro de aire de alto rendimiento para mayor eficiencia del motor.' },
    { name: 'Pastillas de freno', brand: 'Brembo', image: 'https://www.tiendadelmotor.com/images/pastillas-freno-deportivas-brembo-delanteras-Bmw.jpg', price: '$28.50', description: 'Pastillas de freno de cerámica con gran durabilidad.' },
    { name: 'Radiador', brand: 'Koyo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6hQbRclAEBCgNJ3qWSVkljz4RNai1PVbDQ&s', price: '$60.00', description: 'Radiador de aluminio para óptima disipación de calor.' },
    { name: 'Bujías', brand: 'NGK', image: 'https://m.media-amazon.com/images/I/81PaV7Y1NvL._AC_UF894,1000_QL80_.jpg', price: '$16.00', description: 'Juego de 4 bujías de alto rendimiento.' },
    { name: 'Filtro de aceite', brand: 'MANN', image: 'https://m.media-amazon.com/images/I/81FmeBce0mL._AC_UF894,1000_QL80_.jpg', price: '$10.50', description: 'Filtro de aceite para mantener limpio el sistema del motor.' }
  ];

  const handleAgregar = (producto) => {
    setCarrito(prev => [...prev, producto]);
  };

  const handleIrAFactura = () => {
    navigate('/Factura', { state: { productos: carrito } });
  };

  const todasLasMarcas = ['Todos', ...new Set([...productos, ...nuevosRepuestos].map(p => p.brand))];
  const productosFiltrados = (lista) => selectedBrand === 'Todos' ? lista : lista.filter(p => p.brand === selectedBrand);

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label fw-bold">Filtrar por marca:</label>
          <select
            className="form-select"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            {todasLasMarcas.map((marca, idx) => (
              <option key={idx} value={marca}>{marca}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-primary" onClick={handleIrAFactura}>
            Ir a Factura ({carrito.length})
          </button>
        </div>
      </div>

      <div className="row">
        <h2 className="text-center bg-secondary text-white p-2">Productos</h2>
        {productosFiltrados(productos).map((item, idx) => (
          <div className="col-md-3 mb-4" key={`p-${idx}`}>
            <CardItem {...item} onFacturar={() => handleAgregar(item)} />
          </div>
        ))}
      </div>

      <div className="row mt-4">
        <h2 className="text-center bg-primary text-white p-2">Repuestos recién ingresados</h2>
        {productosFiltrados(nuevosRepuestos).map((item, idx) => (
          <div className="col-md-3 mb-4" key={`n-${idx}`}>
            <CardItem {...item} onFacturar={() => handleAgregar(item)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
