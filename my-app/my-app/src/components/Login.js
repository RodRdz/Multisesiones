import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'; // Asegúrate de crear este archivo y agregar los estilos necesarios

function Login() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9]).{8,20}$/;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API o verificarlo con el backend
      alert('Inicio de sesión exitoso!');
      setFormData({
        email: '',
        password: ''
      });
      setValidated(false);
    }
    setValidated(true);
  };

  const validateInput = (e) => {
    const { id, value } = e.target;
    let isValid = true;

    if (id === 'email') {
      isValid = emailRegex.test(value);
    } else if (id === 'password') {
      isValid = passwordRegex.test(value);
    }

    e.target.setCustomValidity(isValid ? '' : 'Invalid field.');
    e.target.classList.toggle('is-valid', isValid);
    e.target.classList.toggle('is-invalid', !isValid);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center h-100">
      <Row className="justify-content-center w-100">
        <Col md={8}>
          <h2 className="fw-bold text-center py-3">Inicio de Sesión en Marzo 2025</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
            <Form.Group controlId="email">
              <Form.Label>Correo Electrónico</Form.Label>
              <div className="input-group has-validation">
                <Form.Control
                  required
                  type="email"
                  placeholder="Correo Electrónico"
                  className="bg-transparent border-0 border-bottom border-dark mb-3"
                  value={formData.email}
                  onChange={handleChange}
                  onInput={validateInput}
                />
                <Form.Control.Feedback type="invalid">Por favor, proporciona una dirección de correo electrónico válida.</Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Contraseña"
                className="bg-transparent border-0 border-bottom border-dark mb-3"
                value={formData.password}
                onChange={handleChange}
                onInput={validateInput}
              />
              <Form.Control.Feedback type="invalid">La contraseña debe tener entre 8 y 20 caracteres, y contener al menos un carácter especial y un número.</Form.Control.Feedback>
            </Form.Group>
            <div className="text-left">
              <Link to="/register" className="btn btn-link">¿No tienes cuenta? Crea una aquí</Link>
            </div>
            <div className="text-left">
              <Link to="/emailrec" className="btn btn-link">¿Olvidaste la Contraseña?</Link>
            </div>
            <div className="text-center">
              <Button variant="secondary" type="submit" className="me-2">Iniciar sesión</Button>
              <Button
                style={{ backgroundColor: '#DB4437', color: 'white', border: 'none' }}
                onClick={() => window.open('http://localhost:5000/auth/google', '_self')}
              >
                Iniciar sesión con Google
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
