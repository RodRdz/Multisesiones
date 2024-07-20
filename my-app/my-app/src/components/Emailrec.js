import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/pintor.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Emailrec() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const Dato = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        to: email,
      });
      if (response.status === 200) {
        navigate('/token');
      }
      setMessage('Email sent: ' + response.data.message);
    } catch (error) {
      setMessage('Failed to send email');
    }
  };

  return (
    <div className="d-flex container align-items-center justify-content-center">
      <div className="shadow rounded p-4 mt-5 bg-transparent">
        <div>
          <img src={image} className="rounded mx-auto d-block img-fluid" alt="Pintor" />
        </div>
        <h1 className="bold text-center mt-4 fs-2">Recuperar Contraseña</h1>
        <h2 className="fs-5 text-center mt-3">Introduce tu correo electrónico para mandarte el token</h2>

        <form className={`mt-4 ${validated ? 'was-validated' : ''}`} noValidate onSubmit={Dato}>
          <div className="form-floating mt-5">
            <input
              type="email"
              className="bg-transparent border-0 border-bottom border-dark form-control"
              id="float"
              placeholder="hola@ejemplo.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="float">Correo Electrónico</label>
            <div className="invalid-feedback">
              Por favor ingresa un correo electrónico válido.
            </div>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto mt-4">
            <button type="submit" className="btn btn-primary mt-4">
              Enviar Correo
            </button>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Emailrec;
