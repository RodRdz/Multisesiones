import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginComponent = () => {
    return (
        <div>
            <h2 className="fw-bold text-center py-3">Inicio de Sesión</h2>

            <Form className="row g-3 needs-validation" noValidate>
                <div className="col-md-7 d-flex flex-column gap-0">
                    <Form.Label htmlFor="loginEmail">Correo Electrónico:</Form.Label>
                    <div className="input-group has-validation">
                        <Form.Control type="email" className="bg-transparent border-0 border-bottom border-dark mb-3" id="loginEmail" required />
                        <Form.Control.Feedback type="invalid">Por favor, proporciona una dirección de correo electrónico válida.</Form.Control.Feedback>
                    </div>
                </div>
                <div className="col-md-7 d-flex flex-column gap-0">
                    <Form.Label htmlFor="loginPassword">Contraseña:</Form.Label>
                    <Form.Control type="password" className="bg-transparent border-0 border-bottom border-dark mb-3" id="loginPassword" required />
                    <Form.Control.Feedback type="invalid">Por favor, proporciona una contraseña.</Form.Control.Feedback>
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
