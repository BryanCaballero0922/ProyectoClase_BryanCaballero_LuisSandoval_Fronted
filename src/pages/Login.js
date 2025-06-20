import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || password.length < 6) {
      setError('Por favor, ingrese un email y una contraseña de al menos 6 caracteres.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3301/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al iniciar sesión.');
      }
      
      // --- LÓGICA DE ROL ACTUALIZADA ---
      // Ya no decidimos el rol en el frontend. Lo recibimos del backend.
      localStorage.setItem('tipoUsuario', data.role); // Usamos el rol que nos envió el backend
      localStorage.setItem('authToken', data.session.access_token);

      // Importante: forzar un refresh para que el Navbar se actualice con el nuevo localStorage
      // El navigate por sí solo a veces no renderiza componentes fuera del <Routes> que loco no xD
      navigate('/home');
      window.location.reload();


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
      <div className="card bg-dark text-white border border-warning shadow-lg rounded-3" style={{ width: '340px' }}>
        <div className="card-body">
          <h1 className="text-center mb-3">Autopartes University</h1>
          <h2 className="text-center mb-3">Iniciar Sesión</h2>
          <form onSubmit={handleOnSubmit}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {error && <div className="text-danger mb-3">{error}</div>}

            <button
              className="btn btn-light w-100"
              type="submit"
            >
              Ingresar
            </button>
          </form>
          <p className="text-center mt-3 mb-0">
            ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
