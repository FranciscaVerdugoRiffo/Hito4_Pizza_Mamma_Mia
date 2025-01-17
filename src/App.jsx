import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar';
//import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login'
import Cart from './components/Cart';
import CartProvider from './context/CartContext';


function App() {
    return (
      <CartProvider>
        <section>
            <Navbar />
            {/*<Header />*/}
              <main >
                <Home />
                {/*<Register />*/}
                {/*<Login />*/}
                <Cart />
              </main>
            <Footer />
        </section>
      </CartProvider>
    );
}

export default App;
