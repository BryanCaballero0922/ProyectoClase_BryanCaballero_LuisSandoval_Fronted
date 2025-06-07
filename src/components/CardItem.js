import React from 'react';

function CardItem({ name, brand, image, price, description, onFacturar }) {
  const handleClick = () => {
    onFacturar({ name, brand, image, price, description });
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        alt={name}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{brand}</h6>
        <p className="card-text">{description}</p>
        <div className="mt-auto">
          <p className="fw-bold text-success">{price}</p>
          <button
            className="btn btn-primary w-100"
            onClick={handleClick}
          >
            Facturar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;

