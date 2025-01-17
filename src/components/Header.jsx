import headerImage from '../assets/Header-img.jpg';

const Header = () => (
  <header
    style={{
      backgroundImage: `url(${headerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '100px 20px',
      color: 'white',
      textAlign: 'center',
    }}
    className="mb-4">
        
    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>
      ¡Bienvenido a Pizzería Mamma Mía!
    </h1>
    <p style={{ fontSize: '1.25rem', marginTop: 0 }}>
      ¡Tenemos las mejores pizzas que prodrás encontrar!
    </p>
  </header>
);

export default Header;
