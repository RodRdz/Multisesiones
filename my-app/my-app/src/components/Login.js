import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

function Login() {
    const handleGoogleLogin = () => {
        window.open('http://localhost:5000/auth/google', '_self');
    };

    return (
        <Container className="bg-info" style={{ '--bs-bg-opacity': .10 }}>
            <Row>
                <Col md={6} className="p-3 text-end">
                    <img src="/img/image.png" className="img-fluid pt-2" alt="responsive" />
                </Col>
                <Col md={6} className="p-5">
                    <div className="text-center w-50 mx-auto">
                        <h2 className="fw-bold text-center py-3">Inicio de Sesión</h2>
                        <Form>
                            <Form.Group controlId="loginEmail">
                                <Form.Label>Correo Electrónico:</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    className="bg-transparent border-0 border-bottom border-dark mb-3"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, proporciona una dirección de correo electrónico válida.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="loginPassword">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Contraseña"
                                    className="bg-transparent border-0 border-bottom border-dark mb-3"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, proporciona una contraseña.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="secondary" onClick={handleGoogleLogin}>
                                Iniciar sesión con Google
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
