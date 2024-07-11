import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image } from 'react-bootstrap';
import imageSrc from '../img/image.png';  // Ruta relativa desde donde está tu componente

const MyComponent = () => {
    return (

          <div className="text-end  mt-5 mb-5">
          <Image src={imageSrc} fluid alt="responsive image" className="mt-5" />
          </div>
      
    );
};

export default MyComponent;