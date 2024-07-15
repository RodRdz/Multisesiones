import React, { useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';

function Register() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?!.*(.)\1{2,}).{8,20}$/;

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
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API o almacenarlo en localStorage
      if (formData.password === formData.confirmPassword) {
        localStorage.setItem('email', formData.email);
        localStorage.setItem('password', formData.password);
        alert('Registro exitoso!');
        setFormData({
          name: '',
          surname: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
        setValidated(false);
      } else {
        alert('Las contraseñas no coinciden.');
      }
    }
    setValidated(true);
  };

  const validateInput = (e) => {
    const { id, value } = e.target;
    let isValid = true;

    if (id === 'phone') {
      if (!/^\d{0,10}$/.test(value)) {
        e.target.value = value.slice(0, -1); // Eliminar el último carácter si no coincide
      }
      isValid = value.length === 10;
    } else if (id === 'email') {
      isValid = emailRegex.test(value);
    } else if (id === 'password') {
      isValid = passwordRegex.test(value);
    } else if (id === 'confirmPassword') {
      isValid = value === formData.password;
    }

    e.target.setCustomValidity(isValid ? '' : 'Invalid field.');
    e.target.classList.toggle('is-valid', isValid);
    e.target.classList.toggle('is-invalid', !isValid);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center h-100">
      <Row className="justify-content-center w-100">
        <Col md={8}>
          <h2 className="fw-bold text-center py-3">Registro</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit} className="needs-validation">
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    className="bg-transparent border-0 border-bottom border-dark mb-4"
                    value={formData.name}
                    onChange={handleChange}
                    onInput={validateInput}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="surname">
                  <Form.Label>Apellido Paterno</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Apellido Paterno"
                    className="bg-transparent border-0 border-bottom border-dark mb-4"
                    value={formData.surname}
                    onChange={handleChange}
                    onInput={validateInput}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid surname.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <div className="input-group has-validation">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      className="bg-transparent border-0 border-bottom border-dark mb-4"
                      value={formData.email}
                      onChange={handleChange}
                      onInput={validateInput}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid email address.</Form.Control.Feedback>
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="Telefono"
                    className="bg-transparent border-0 border-bottom border-dark mb-4"
                    value={formData.phone}
                    onChange={handleChange}
                    onInput={validateInput}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid phone number with exactly 10 digits.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Contraseña"
                    className="bg-transparent border-0 border-bottom border-dark mb-4"
                    value={formData.password}
                    onChange={handleChange}
                    onInput={validateInput}
                  />
                  <Form.Control.Feedback type="invalid">Password must be 8-20 characters long, contain at least one special character, and not have consecutive identical characters.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Confirmar Contraseña"
                    className="bg-transparent border-0 border-bottom border-dark mb-4"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onInput={validateInput}
                  />
                  <Form.Control.Feedback type="invalid">Passwords do not match.</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId="terms">
                  <Form.Check
                    required
                    type="checkbox"
                    label="Agree to terms and conditions"
                    className="mb-3"
                  />
                  <Form.Control.Feedback type="invalid">You must agree before submitting.</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <div className="text-left">
              <a href="/login" className="btn btn-link">¿Ya tienes una cuenta? Inicia sesión aquí</a>
            </div>
            <div className="text-end">
              <Button variant="secondary" type="submit">Registrarse</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
