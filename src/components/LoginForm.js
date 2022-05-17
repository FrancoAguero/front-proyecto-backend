import React from 'react';
import { useForm } from '../hooks/useForm';
import {  } from '../store/apis'

const LoginForm = () => {


  const [formValues, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { 
    email,
    password,
  } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

  };

  return (
    <div className="card shadow-lg">
      <div className="card-header">
        Login
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row" >

              <div className="col-12 mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  value={email}
                  onChange={handleInputChange}/>
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Contraseña</label>
                <input 
                  name="password"
                  type="password" 
                  className="form-control" 
                  value={password}
                  onChange={handleInputChange}/>              
              </div>

            </div>
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
