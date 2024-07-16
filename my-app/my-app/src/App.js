import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Leftimg from './components/Leftimg';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Recovery from './components/Recovery';


function App() {
  return (
    <Router>
      <div className="bg-info" style={{ '--bs-bg-opacity': .10, height: '100vh' }}>
        <Container fluid>
          <Row className="h-100">
            <Col md={6} className="p-3 d-flex justify-content-center align-items-center">
              <Leftimg />
            </Col>
            <Col md={6} className="p-5 d-flex flex-column justify-content-center align-items-center">
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />
                <Route path='/Recovery' element={<Recovery/>} />

              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
