import React from 'react';

function CardItem({ name, brand, image, onFacturar }) {
  return (
    <div className="card h-100 shadow-sm" >
      <img src={image} className="card-img-top img-fluid" alt={name} style={{ height: '150px', objectFit: 'cover' }} />
      <div className="card-body p-2">
        <h5 className="card-title mb-1 fs-6">{name}</h5>
        <p className="card-text mb-0 text-muted">Marca: {brand}</p>
        <div className="text-center">
  <button className="btn btn-primary btn-sm mt-2" onClick={onFacturar}>
    Facturar
  </button>
</div>
      </div>
    </div>
  );
}

export default CardItem;
