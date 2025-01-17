import pizzas from '../pizzas';
import CardPizza from './CardPizza';

const Home = () => (
  <div>
      <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Home;