import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/pintor.jpg';
import { Link } from 'react-router-dom';

const Recovery = () => {
  return (
    <div className="d-flex container align-items-center justify-content-center">
      <div className="shadow rounded p-4 mt-5 bg-transparent">
        <div>
          <img src={image} className="rounded mx-auto d-block img-fluid" alt="" />
        </div>
        <h1 className="bold text-center mt-4 fs-2">Recuperar Contraseña</h1>
        <h2 className="fs-5 text-center mt-3">Introduce los datos, de manera que sean idénticos</h2>

        <div className="mt-4">

          <div className='form mt-5'>
          <input type='email'
                  className=" bg-transparent 
                              border-0
                              border-bottom 
                              border-dark 
                              form-control"
                    placeholder="hola@ejemplo.com">
                    </input>
          </div>

          <div className="form mt-4">
            <input
              type="password"
              className=" bg-transparent 
                          border-0
                          border-bottom 
                          border-dark 
                          form-control"
              id="Newcontra"
              placeholder="Nueva Contraseña"
            />
          </div>

          <div className="form mt-3">
            <input
              type="password"
              className=" bg-transparent 
                          border-0 
                          border-bottom 
                          border-dark 
                          form-control"
              id="Compnewcontra"
              placeholder="Confirmar Contraseña"
            />
          </div>
        </div>

        <div className="d-flex mt-4">
            <Link to="/Login" className="btn btn-link">Recordaste la contraseña?</Link>
        </div>

        <div className="d-grid gap-2 col-6 mx-auto mt-4">
          <button type="button" className="btn btn-primary mt-4">Cambiar Contraseña</button>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
