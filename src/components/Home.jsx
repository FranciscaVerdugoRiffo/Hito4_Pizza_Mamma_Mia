import React, { useState, useEffect } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Consumir la API
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Pizzas</h1>
      <div>
        {pizzas.map((pizza) => (
          <div key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>Price: ${pizza.price}</p>
            <img src={pizza.image} alt={pizza.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


