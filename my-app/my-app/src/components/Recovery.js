import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/pintor.jpg';
import { Link } from 'react-router-dom';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';

const Recovery = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [validated, setValidated] = useState(false);

  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?!.*(.)\1{2,}).{8,20}$/;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateInput = (e) => {
    const { id, value } = e.target;
    let isValid = true;

    if (id === 'password') {
      isValid = passwordRegex.test(value);
    } else if (id === 'confirmPassword') {
      isValid = value === formData.password;
    }

    e.target.setCustomValidity(isValid ? '' : 'Invalid field.');
    e.target.classList.toggle('is-valid', isValid);
    e.target.classList.toggle('is-invalid', !isValid);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      if (formData.password === formData.confirmPassword) {
        // Aquí puedes manejar el cambio de contraseña
        alert('Contraseña cambiada exitosamente!');
        setFormData({
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

  return (
    <Container className="d-flex align-items-center justify-content-center h-100">
      <Row className="justify-content-center w-100">
        <Col md={8}>
          <div className="shadow rounded p-4 mt-5 bg-transparent">
            <div>
              <img src={image} className="rounded mx-auto d-block img-fluid" alt="Pintor" />
            </div>
            <h1 className="bold text-center mt-4 fs-2">Recuperar Contraseña</h1>
            <h2 className="fs-5 text-center mt-3">Introduce los datos, de manera que sean idénticos</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-4">
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
                <Form.Control.Feedback type="invalid">
                  La contraseña debe tener entre 8 y 20 caracteres, contener al menos un carácter especial, y no tener caracteres idénticos consecutivos.
                </Form.Control.Feedback>
              </Form.Group>
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
                <Form.Control.Feedback type="invalid">Las contraseñas no coinciden.</Form.Control.Feedback>
              </Form.Group>
              <div className="d-flex mt-4">
                <Link to="/login" className="btn btn-link">¿Recordaste la contraseña?</Link>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-4">
                <Button type="submit" className="btn btn-primary mt-4">Cambiar Contraseña</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Recovery;
