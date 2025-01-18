import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 

  // Función para validar los datos antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();

    // Reiniciar mensajes
    setError("");
    setSuccess("");

    // Validaciones
    if (!email.trim() || !pw.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    } else if (pw.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    } 

    // Si todas las validaciones pasan
    setSuccess("¡Acceso exitoso! Bienvenido a Pizzería Mamma Mia.");
    setError(""); // Limpiar error

    // Limpiar formulario (opcional)
    setEmail("");
    setPw("");
    
  };

  return (
    <form onSubmit={validarDatos} className="w-50 mx-auto rounded mt-5">
      <h2 className="text-start mb-4">Login</h2>

      {/* Mostrar mensajes de error o éxito */}
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      {/* Campo Email */}
      <div className="text-start mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      {/* Campo Password */}
      <div className="text-start mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter your password"
          onChange={(e) => setPw(e.target.value)}
          value={pw}
        />
      </div>

      {/* Botón de Login */}
      <div className="mb-3 text-start">
        <button type="submit" className="btn btn-primary">
            Login
        </button>
      </div>
    </form>
  );
};

export default Login;