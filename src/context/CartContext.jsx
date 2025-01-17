import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext(); // Se crea el contexto

const CartProvider = ({ children }) => { //Se crea un proveedor para el contexto
  const [cart, setCart] = useState([]);//Estado global del carrito de compras

  const addToCart = (product) => { //Función para agregar productos al carrito
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => { //Función para eliminar productos del carrito
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); //Función para el calcular el total del carrito

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); //Este es el Hook para consumir el contexto creado

export default CartProvider;
