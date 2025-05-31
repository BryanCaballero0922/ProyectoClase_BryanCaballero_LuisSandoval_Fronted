import React from 'react';

function CardItem({ name, brand, image }) {
  return (
    <div className="card h-100 shadow-sm" style={{ width: '12rem' }}>
      <img src={image} className="card-img-top img-fluid" alt={name} style={{ height: '150px', objectFit: 'cover' }} />
      <div className="card-body p-2">
        <h5 className="card-title mb-1 fs-6">{name}</h5>
        <p className="card-text mb-0 text-muted">Marca: {brand}</p>
      </div>
    </div>
  );
}
export default CardItem;