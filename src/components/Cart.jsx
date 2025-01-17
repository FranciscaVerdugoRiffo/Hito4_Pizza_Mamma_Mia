import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <div className="container mt-5">
      <h2 className="text-star mb-4">Detalles del pedido</h2>
      <div className="row">
        <div className="col-12">
          {cart.length > 0 ? (
            <table className="table table-striped">
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }}/>
                    </td>
                    <td className="fw-bolder text-start">{item.name}</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toLocaleString()}</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm me-2" onClick={() => addToCart(item)}>
                        +
                      </button>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => removeFromCart(item.id)}>
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center">Tu carrito está vacío 🛒</p>
          )}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 text-start">
          <h3>Total: ${total.toLocaleString()}</h3>
          <button className="btn btn-dark mt-2">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

