import React, { useState, useEffect } from 'react';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchPizzas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/pizzas');
      if (!response.ok) {
        throw new Error('Error al consumir la API');
      }
      const data = await response.json();
      setPizzas(data);
    } catch (err) {
      setError(err.message);
    }
  };

  fetchPizzas();
}, []);
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nuestras Pizzas</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;



