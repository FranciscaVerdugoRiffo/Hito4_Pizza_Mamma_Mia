import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwOk, setPwOk] = useState("");
  const [error, setError] = useState(""); // Mensaje de error
  const [success, setSuccess] = useState(""); // Mensaje de éxito

  // Función para validar los datos antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();

    // Reiniciar mensajes
    setError("");
    setSuccess("");

    // Validaciones
    if (!email.trim() || !pw.trim() || !pwOk.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    } else if (pw.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    } else if (pw !== pwOk) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Si todas las validaciones pasan
    setSuccess("¡Registro exitoso! Bienvenido a Pizzería Mamma Mia.");
    setError(""); // Limpiar error

    // Limpiar formulario (opcional)
    setEmail("");
    setPw("");
    setPwOk("");
  };

  return (
    <form onSubmit={validarDatos} className="w-50 mx-auto rounded mt-5">
      <h2 className="text-start mb-4">Registro</h2>

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

      {/* Campo Confirmar Password */}
      <div className="text-start mb-3">
        <label className="form-label">Repetir Password</label>
        <input
          type="password"
          name="passwordrd"
          className="form-control"
          placeholder="Re-enter your password"
          onChange={(e) => setPwOk(e.target.value)}
          value={pwOk}
        />
      </div>

      {/* Botón de Crear Cuenta */}
      <button type="submit" className="btn btn-primary w-100">
        Crear Cuenta
      </button>
    </form>
  );
};

export default Register;