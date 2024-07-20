import React, { useState } from 'react';
import axios from 'axios';
import image from '../assets/pintor.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate


function Menutoken() {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/verify-token', { token });
      setMessage(response.data.message);
      if (response.status === 200) {
        // Redirige a la página de recuperación si el token es válido
        navigate('/Recovery');
      }
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="d-flex container align-items-center justify-content-center">
      <div className="shadow rounded p-4 mt-5 bg-transparent">
        <div>
          <img src={image} className="rounded mx-auto d-block img-fluid" alt="" />
        </div>
        <h1 className="bold text-center mt-4 fs-2">Token</h1>
        <h2 className="fs-5 text-center mt-3">Introduce el token enviado a tu correo</h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            className="bg-transparent border-0 border-bottom border-dark form-control"
            placeholder="Token"
            value={token}
            onChange={handleTokenChange}
          />
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
          <button type="submit" className="btn btn-primary mt-4">Subir Token</button>
          </div>
        </form>

        {message && <div className="mt-3 text-center">{message}</div>}
      </div>
    </div>
  );
}

export default Menutoken;
