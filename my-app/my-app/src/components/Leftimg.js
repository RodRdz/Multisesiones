import React from 'react';
import image from '../assets/image.png'; // Ruta actualizada a la imagen

function Leftimg() {
  return (
    <div className="text-end w-100">
      <img src={image} alt="Description" className="img-fluid pt-2" />
    </div>
  );
}

export default Leftimg;

