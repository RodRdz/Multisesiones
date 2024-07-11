import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyComponent from './components/Leftimg';
import {  Col, Container, Row} from 'react-bootstrap';
import RegistroComponent from './components/Registro';



function App() {
    return (
      <body className='bg-info' style={{ '--bs-bg-opacity': .10 }}>
      <Container fluid >
        <Row className='mt-4 mb-4'>
          <Col>
            <MyComponent/>
          </Col>
          <Col>
            <RegistroComponent/>
          </Col>

       </Row>
    
       </Container>
       </body>
  

    );
}

export default App;
