import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    
    if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    try {
      const response = await fetch('http://localhost:3301/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al registrar el usuario.');
      }
      
      setSuccess('¡Usuario registrado con éxito! Serás redirigido al login.');

      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: '100vh',
        backgroundImage: "url('https://estaticos.qdq.com/swdata/photos/396/396021061/8b83a9c6a6b44011bf8bfd593373ac1d.jpg')",
        backgroundSize: 'cover',
      }}
    >
      <div className="card bg-dark text-white border border-success shadow-lg rounded-3" style={{ width: '380px' }}>
        <div className="card-body">
          <h1 className="text-center mb-3">Autopartes University</h1>
          <h2 className="text-center mb-3">Crear Nueva Cuenta</h2>
          <form onSubmit={handleOnSubmit}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirme su contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <button
              className="btn btn-success w-100"
              type="submit"
            >
              Registrarse
            </button>
          </form>
          <p className="text-center mt-3 mb-0">
            ¿Ya tienes una cuenta? <Link to="/">Inicia Sesión Aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
