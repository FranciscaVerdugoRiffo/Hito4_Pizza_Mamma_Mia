import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Necesario para obtener el ID de la URL

const Pizza = () => {
  const { id } = useParams(); // Obtener el ID de la pizza desde la URL
  const [pizza, setPizza] = useState(null); // Estado para la pizza
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Error al consumir la API');
        }
        const data = await response.json();
        setPizza(data); // Guardar los datos de la pizza
      } catch (err) {
        setError(err.message); // Manejar errores
      }
    };

    fetchPizza(); // Llamar a la API
  }, [id]); // Ejecutar cada vez que cambie el ID

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  if (!pizza) {
    return <p>Cargando pizza...</p>; // Mensaje de carga
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p className="text-muted">Precio: ${pizza.price.toLocaleString()}</p>
          <h4>Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>
          <h4>Descripción:</h4>
          <p>{pizza.desc}</p>
          <button className="btn btn-dark mt-3">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
