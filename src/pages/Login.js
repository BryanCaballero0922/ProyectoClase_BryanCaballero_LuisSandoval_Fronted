import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const usuariosValidos = [
    { codigo: '1', password: 'calvo0909' },
    { codigo: '2', password: 'patri8844' },
    { codigo: '3', password: 'angel928374' }
  ];

  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("valor de código: " + email);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (!/^\d+$/.test(email)) {
      setInputError('Código inválido. No se reconoce este codigo.');
      valid = false;
    } else {
      setInputError(null);
    }

    if (password.length < 6) {
      setPasswordError('Contraseña inválida. Debe tener al menos 6 caracteres.');
      valid = false;
    } else {
      setPasswordError(null);
    }

    if (valid) {
      const usuario = usuariosValidos.find(
        (u) => u.codigo === email && u.password === password
      );

      if (usuario) {
        navigate('/');
      } else {
        setInputError('Este usuario no existe.');
      }
    }
  };

  const handleOnBlur = () => {
    if (/^\d+$/.test(email)) {
      setInputError(null);
    } else {
      setInputError('Solo se permiten números.');
    }
  };

  const handlePasswordBlur = () => {
    if (password.length >= 6) {
      setPasswordError(null);
    } else {
      setPasswordError('Contraseña inválida. Debe tener al menos 6 caracteres.');
    }
  };

  return (
    <div
  className="d-flex align-items-center justify-content-center"
  style={{
    height: '100vh',
    backgroundImage: "url('https://estaticos.qdq.com/swdata/photos/396/396021061/8b83a9c6a6b44011bf8bfd593373ac1d.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  <div className="card bg-dark text-white border border-warning shadow-lg rounded-3" style={{ width: '340px' }}>
    <div className="card-body">
      <h1 className="text-center mb-3">Autopartes University</h1>
      <h2 className="text-center mb-3">Iniciar Sesión</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="tel"
          className="form-control mb-3"
          placeholder="Ingrese su código"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleOnBlur}
        />
        {inputError && <div className="text-danger mb-3">{inputError}</div>}

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
        />
        {passwordError && <div className="text-danger mb-3">{passwordError}</div>}

        <button
          className="btn btn-light w-100"
          type="submit"
          onClick={handleOnClick}
          onMouseOver={(e) => e.currentTarget.className = "btn btn-warning w-100"}
          onMouseOut={(e) => e.currentTarget.className = "btn btn-light w-100"}
        >
          Ingresar
        </button>
      </form>
    </div>
  </div>
</div>
  );
}

export default Login;