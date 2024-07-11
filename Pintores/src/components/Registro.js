import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const RegistroComponent = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de registro
        console.log('Formulario de registro enviado');
    };

    return (
        <div className='mt-5 mb-5'>
            <h2 className="fw-bold text-center py-3 mt-5">Registro</h2>

            <Form onSubmit={handleSubmit} className="row g-3 needs-validation mt-5 mb-5" noValidate>
                <Col md={6} className="d-flex flex-column gap-0">
                    <Form.Label htmlFor="validationCustom01">Nombre:</Form.Label>
                    <Form.Control type="text" className="bg-transparent border-0 border-bottom border-dark mb-4" id="validationCustom01" required />
                    <Form.Control.Feedback className="valid-feedback">¡Perfecto!</Form.Control.Feedback>
                    <Form.Control.Feedback className="invalid-feedback">Por favor, proporciona un nombre válido.</Form.Control.Feedback>
                </Col>
                <Col md={6} className="d-flex flex-column gap-0">
                    <Form.Label htmlFor="validationCustom02">Apellido Paterno:</Form.Label>
                    <Form.Control type="text" className="bg-transparent border-0 border-bottom border-dark mb-3" id="validationCustom02" required />
                    <Form.Control.Feedback className="valid-feedback">¡Perfecto!</Form.Control.Feedback>
                    <Form.Control.Feedback className="invalid-feedback">Por favor, proporciona un apellido válido.</Form.Control.Feedback>
                </Col>
                <Col md={6} className="d-flex flex-column gap-0">
                    <Form.Label htmlFor="validationCustomEmail">Email:</Form.Label>
                    <div className="input-group has-validation">
                        <Form.Control type="email" className="bg-transparent border-0 border-bottom border-dark mb-3" id="validationCustomEmail" required />
                        <Form.Control.Feedback className="invalid-feedback">Por favor, proporciona una dirección de correo electrónico válida.</Form.Control.Feedback>
                    </div>
                </Col>
                <Col md={6} className="d-flex flex-column gap-0">
                    <Form.Label htmlFor="validationCustom03">Teléfono:</Form.Label>
                    <Form.Control type="tel" className="bg-transparent border-0 border-bottom border-dark mb-3" id="validationCustom03" required />
                    <Form.Control.Feedback className="invalid-feedback">Por favor, proporciona un número de teléfono válido.</Form.Control.Feedback>
                </Col>
                <Col md={6} className="d-flex flex-column gap-0">
                    <Form.Label htmlFor="registerPassword">Contraseña:</Form.Label>
                    <Form.Control type="password" className="bg-transparent border-0 border-bottom border-dark mb-3" id="registerPassword" required />
                    <Form.Control.Feedback className="invalid-feedback">Por favor, proporciona una contraseña.</Form.Control.Feedback>
                </Col>
                <Col md={6} className="d-flex flex-column gap-0">
                    <Form.Label htmlFor="confirmPassword">Confirmar Contraseña:</Form.Label>
                    <Form.Control type="password" className="bg-transparent border-0 border-bottom border-dark mb-3" id="confirmPassword" required />
                    <Form.Control.Feedback className="invalid-feedback">Las contraseñas no coinciden.</Form.Control.Feedback>
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
