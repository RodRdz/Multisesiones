import React, { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const RegistroComponent = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?!.*(.)\1{2,}).{8,20}$/;

    const validateEmail = (email) => {
      return emailRegex.test(email) ? '' : 'Por favor, proporciona una dirección de correo electrónico válida.';
    };

    const validateTelefono = (telefono) => {
      return /^\d{10}$/.test(telefono) ? '' : 'Por favor, proporciona un número de teléfono válido con exactamente 10 dígitos.';
    };

    const validatePassword = (password) => {
      return passwordRegex.test(password)
        ? ''
        : 'La contraseña debe tener entre 8 y 20 caracteres, contener al menos un carácter especial y un número, y no tener caracteres idénticos consecutivos.';
    };

    const validateConfirmPassword = (confirmPassword, password) => {
      return confirmPassword === password ? '' : 'Las contraseñas no coinciden.';
    };

    setEmailError(validateEmail(email));
    setTelefonoError(validateTelefono(telefono));
    setPasswordError(validatePassword(password));
    setConfirmPasswordError(validateConfirmPassword(confirmPassword, password));
  }, [email, telefono, password, confirmPassword]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      alert('Registro exitoso!');
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      // Aquí puedes añadir tu lógica para verificar el registro con el backend
    }
    setValidated(true);
  };

  return (
    <div className='mt-5 mb-5'>
      <h2 className="fw-bold text-center py-3 mt-5">Registro</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="row g-3 needs-validation mt-5 mb-5">
        <Col md={6} className="d-flex flex-column gap-0">
          <Form.Label htmlFor="validationCustom01">Nombre:</Form.Label>
          <Form.Control
            type="text"
            className="bg-transparent border-0 border-bottom border-dark mb-4"
            id="validationCustom01"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Form.Control.Feedback className="valid-feedback">¡Perfecto!</Form.Control.Feedback>
          <Form.Control.Feedback className="invalid-feedback">Por favor, proporciona un nombre válido.</Form.Control.Feedback>
        </Col>
        <Col md={6} className="d-flex flex-column gap-0">
          <Form.Label htmlFor="validationCustom02">Apellido Paterno:</Form.Label>
          <Form.Control
            type="text"
            className="bg-transparent border-0 border-bottom border-dark mb-3"
            id="validationCustom02"
            required
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <Form.Control.Feedback className="valid-feedback">¡Perfecto!</Form.Control.Feedback>
          <Form.Control.Feedback className="invalid-feedback">Por favor, proporciona un apellido válido.</Form.Control.Feedback>
        </Col>
        <Col md={6} className="d-flex flex-column gap-0">
          <Form.Label htmlFor="validationCustomEmail">Email:</Form.Label>
          <div className="input-group has-validation">
            <Form.Control
              type="email"
              className="bg-transparent border-0 border-bottom border-dark mb-3"
              id="validationCustomEmail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column gap-0">
          <Form.Label htmlFor="validationCustom03">Teléfono:</Form.Label>
          <Form.Control
            type="tel"
            className="bg-transparent border-0 border-bottom border-dark mb-3"
            id="validationCustom03"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            isInvalid={!!telefonoError}
          />
          <Form.Control.Feedback type="invalid">{telefonoError}</Form.Control.Feedback>
        </Col>
        <Col md={6} className="d-flex flex-column gap-0">
          <Form.Label htmlFor="registerPassword">Contraseña:</Form.Label>
          <Form.Control
            type="password"
            className="bg-transparent border-0 border-bottom border-dark mb-3"
            id="registerPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!passwordError}
          />
          <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
        </Col>
        <Col md={6} className="d-flex flex-column gap-0">
          <Form.Label htmlFor="confirmPassword">Confirmar Contraseña:</Form.Label>
          <Form.Control
            type="password"
            className="bg-transparent border-0 border-bottom border-dark mb-3"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={!!confirmPasswordError}
          />
          <Form.Control.Feedback type="invalid">{confirmPasswordError}</Form.Control.Feedback>
        </Col>
        <Col md={12} className="d-flex flex-column gap-0">
          <div className="form-check">
            <Form.Check.Input className="form-check-input mb-3" type="checkbox" id="invalidCheck" required />
            <Form.Check.Label className="form-check-label" htmlFor="invalidCheck">Acepto los términos y condiciones</Form.Check.Label>
            <Form.Control.Feedback className="invalid-feedback">Debes aceptar los términos y condiciones antes de enviar.</Form.Control.Feedback>
          </div>
        </Col>
        <Col xs={12} className="text-left">
          <a href="login.html" className="btn btn-link">¿Ya tienes una cuenta? Inicia sesión aquí</a>
        </Col>
        <Col xs={12} className="text-end">
          <Button className="btn btn-secondary" type="submit">Registrarse</Button>
        </Col>
      </Form>
    </div>
  );
};

export default RegistroComponent;
