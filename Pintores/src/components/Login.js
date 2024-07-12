import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,20}$/;

    const validateEmail = (email) => {
      return emailRegex.test(email) ? '' : 'Por favor, proporciona una dirección de correo electrónico válida.';
    };

    const validatePassword = (password) => {
      return passwordRegex.test(password)
        ? ''
        : 'La contraseña debe tener entre 8 y 20 caracteres, y contener al menos un carácter especial y un número.';
    };

    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
  }, [email, password]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert('Inicio de sesión exitoso!');
      // Aquí puedes añadir tu lógica para verificar el inicio de sesión con el backend
    }
    setValidated(true);
  };

  return (
    <div>
      <h2 className="fw-bold text-center py-3">Inicio de Sesión</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="row g-3 needs-validation">
        <div className="col-md-7 d-flex flex-column gap-0">
          <Form.Label htmlFor="loginEmail">Correo Electrónico:</Form.Label>
          <div className="input-group has-validation">
            <Form.Control
              type="email"
              className="bg-transparent border-0 border-bottom border-dark mb-3"
              id="loginEmail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
          </div>
        </div>
        <div className="col-md-7 d-flex flex-column gap-0">
          <Form.Label htmlFor="loginPassword">Contraseña:</Form.Label>
          <Form.Control
            type="password"
            className="bg-transparent border-0 border-bottom border-dark mb-3"
            id="loginPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!passwordError}
          />
          <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
        </div>
        <div className="col-md-12 d-flex flex-column gap-0">
          <div className="form-check">
            <Form.Check.Input className="form-check-input mb-3" type="checkbox" id="invalidCheck" required />
            <Form.Check.Label htmlFor="invalidCheck">Aceptar términos y condiciones</Form.Check.Label>
            <Form.Control.Feedback type="invalid">Debes aceptar los términos y condiciones antes de enviar.</Form.Control.Feedback>
          </div>
        </div>
        <div className="col-12 text-left">
          <a href="index.html" className="btn btn-link">¿No tienes cuenta? Crea una aquí</a>
        </div>
        <div className="col-12 text-center">
          <Button className="btn btn-secondary" type="submit">Iniciar sesión</Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginComponent;
