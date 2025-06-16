import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Ofertas() {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  // 1. Añadimos el estado para el carrito local
  const [carrito, setCarrito] = useState([]);

  const ofertas = [
    { id: 1, name: 'Amortiguador Trasero', brand: 'Grob', image: 'https://th.bing.com/th/id/OIP.5YvwT4Hw0ZVXM3TbHtl93AHaD_?rs=1&pid=ImgDetMain', description: 'Amortiguador trasero con descuento para mejor amortiguación.', priceOriginal: 60.00, priceOferta: 45.00 },
    { id: 2, name: 'Bujías Premium', brand: 'NGK', image: 'https://m.media-amazon.com/images/I/81PaV7Y1NvL._AC_UF894,1000_QL80_.jpg', description: 'Juego de 4 bujías de alto rendimiento con oferta especial.', priceOriginal: 20.00, priceOferta: 16.00 },
    { id: 3, name: 'Filtro de aceite avanzado', brand: 'MANN', image: 'https://m.media-amazon.com/images/I/81FmeBce0mL._AC_UF894,1000_QL80_.jpg', description: 'Filtro de aceite para mantener limpio el motor, ahora en oferta.', priceOriginal: 15.00, priceOferta: 10.50 },
    { id: 4, name: 'Pastillas de freno cerámicas', brand: 'Brembo', image: 'https://www.tiendadelmotor.com/images/pastillas-freno-deportivas-brembo-delanteras-Bmw.jpg', description: 'Pastillas con gran durabilidad y descuento especial.', priceOriginal: 35.00, priceOferta: 28.50 },
    { id: 5, name: 'Radiador aluminio', brand: 'Koyo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6hQbRclAEBCgNJ3qWSVkljz4RNai1PVbDQ&s', description: 'Radiador eficiente para tu motor, ahora con descuento.', priceOriginal: 75.00, priceOferta: 60.00 }
  ]; //

  // 2. Función para agregar una oferta al carrito local
  const handleAgregar = (oferta) => {
    // Adaptamos el objeto de oferta para que coincida con la estructura de un producto normal
    const productoParaCarrito = {
      name: oferta.name,
      brand: oferta.brand,
      price: `$${oferta.priceOferta.toFixed(2)}`, // Usamos el precio de oferta
      description: oferta.description
    };
    setCarrito(prev => [...prev, productoParaCarrito]);
    alert(`"${oferta.name}" añadido a la factura.`);
  };

  // 3. Función para navegar a la página de factura con los productos del carrito
  const handleIrAFactura = () => {
    navigate('/Factura', { state: { productos: carrito } });
  };

  const todasLasMarcas = ['Todos', ...new Set(ofertas.map(o => o.brand))];
  const ofertasFiltradas = selectedBrand === 'Todos' ? ofertas : ofertas.filter(o => o.brand === selectedBrand);

  return (
    <div className="container mt-4">
      <div className="row mb-3 align-items-end">
        <div className="col-md-4">
          <label className="form-label fw-bold">Filtrar por marca:</label>
          <select className="form-select" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            {todasLasMarcas.map((marca, idx) => ( <option key={idx} value={marca}>{marca}</option>))}
          </select>
        </div>
        {/* 4. Botón para ir a la factura con el contador de productos */}
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={handleIrAFactura} disabled={carrito.length === 0}>
            Ir a Factura ({carrito.length})
          </button>
        </div>
      </div>

      <div className="row">
        <h2 className="text-center bg-danger text-white p-2">Ofertas Especiales</h2>
        {ofertasFiltradas.map((oferta) => (
          <div key={oferta.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={oferta.image} className="card-img-top" alt={oferta.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{oferta.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{oferta.brand}</h6>
                <p className="card-text">{oferta.description}</p>
                <p className="card-text">
                  <del className="text-danger">${oferta.priceOriginal.toFixed(2)}</del>{' '}
                  <span className="fw-bold">${oferta.priceOferta.toFixed(2)}</span>
                </p>
                {/* 5. El botón de la tarjeta ahora agrega el producto al carrito local */}
                <button
                  className="btn btn-warning mt-auto"
                  onClick={() => handleAgregar(oferta)}
                >
                  Agregar a Factura
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ofertas;

