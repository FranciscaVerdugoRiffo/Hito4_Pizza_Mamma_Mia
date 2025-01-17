import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { total } = useCart();
  const token = false; 

  const formatCurrency = (amount) =>
    amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-text text-white me-4 fs-4 mb-0">Pizzería Mamma Mia!</p>
        <div className="d-flex">
          <button className="btn btn-outline-secondary text-white border-white me-2">🍕 Home</button>
          
          {token ? (
            <>
              <button className="btn btn-outline-secondary text-white border-white me-2">🔓 Profile</button>
              <button className="btn btn-outline-secondary text-white border-white me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-secondary text-white border-white me-2">🔐 Login</button>
              <button className="btn btn-outline-secondary text-white border-white me-2">🔐 Register</button>
            </>
          )}
        </div>
        <div className="d-flex ms-auto">
          <button className="btn btn-outline-info text-info border-info"> 🛒 Total: {formatCurrency(total)}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

