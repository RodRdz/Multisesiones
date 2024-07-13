import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Register() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="bg-info" style={{ '--bs-bg-opacity': .10 }}>
            <Row>
                <Col md={6} className="p-3 text-end">
                    <img src="img/image.png" className="img-fluid pt-2" alt="responsive" />
                </Col>
                <Col md={6} className="p-3">
                    <div className="text-center w-50 mx-auto">
                        <Form.Range className="w-75 mx-auto" min="0" max="2" step="1" />
                    </div>
                    <h2 className="fw-bold text-center py-3">Registro</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Group controlId="validationCustom01">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Nombre"
                                        className="bg-transparent border-0 border-bottom border-dark mb-4"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="validationCustom02">
                                    <Form.Label>Apellido Paterno:</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Apellido Paterno"
                                        className="bg-transparent border-0 border-bottom border-dark mb-3"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid surname.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="validationCustomEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent border-0 border-bottom border-dark mb-3"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="validationCustom03">
                                    <Form.Label>Telefono:</Form.Label>
                                    <Form.Control
                                        required
                                        type="tel"
                                        placeholder="Telefono"
                                        className="bg-transparent border-0 border-bottom border-dark mb-3"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid phone number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="registerPassword">
                                    <Form.Label>Contraseña:</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Contraseña"
                                        className="bg-transparent border-0 border-bottom border-dark mb-3"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="confirmPassword">
                                    <Form.Label>Confirmar Contraseña:</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Confirmar Contraseña"
                                        className="bg-transparent border-0 border-bottom border-dark mb-3"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Passwords do not match.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="invalidCheck">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="text-left">
                                <Button href="/login" variant="link">¿Ya tienes una cuenta? Inicia sesión aquí</Button>
                            </Col>
                            <Col className="text-end">
                                <Button type="submit" variant="secondary">Registrarse</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
