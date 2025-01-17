import React from 'react';
import { useCart } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={`Imagen de ${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <hr style={{ border: '1px solid #ccc' }} />
          <ul className="list-unstyled">
            {ingredients.map((ingredient, index) => (<li key={index}>🍕 {ingredient}</li>))}
          </ul>
          <hr style={{ border: '1px solid #ccc' }} />
          <p className="card-text mt-3">Precio: ${price.toLocaleString()}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-light">Ver más 👀</button>
            <button className="btn btn-dark" onClick={() => addToCart({ id, name, price, img })}> Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
