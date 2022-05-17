import React from 'react';
import { useForm } from '../hooks/useForm';
import { usePostUserRegisterMutation } from '../store/apis'

const SignUpForm = () => {
  const  [ postUserRegister ]  = usePostUserRegisterMutation()

  const [formValues, handleInputChange, handleInputChangeImg, reset] = useForm({
    email: "",
    password: "",
    name: "",
    adress: "",
    age: "",
    num: "",
    img: "",
  });

  const { 
    email,
    password,
    name,
    adress,
    age,
    num,
  } = formValues

  const handleSubmit = async (e) => {
    e.preventDefault()
      //await postUserRegister(formValues)
    reset()
  };

  return (
    <div className="card shadow-lg">
      <div className="card-header">
        Sign Up
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

              <div className="col-6 mb-3">
                <label className="form-label">Nombre Completo</label>
                 <input 
                  name="name"
                  className="form-control" 
                  value={name}
                  onChange={handleInputChange}/>
              </div>

              <div className="col-6 mb-3">
                <label className="form-label">Direccion</label>
                <input 
                  name="adress"
                  className="form-control" 
                  value={adress}
                  onChange={handleInputChange}/>
              </div>

              <div className="col-6 mb-3">
                <label className="form-label">Edad</label>
                <input 
                  name="age"
                  className="form-control" 
                  value={age}
                  onChange={handleInputChange}/>
              </div>

              <div className="col-6 mb-3">
                <label className="form-label">Numero de Telefono</label>
                <input 
                  name="num"
                  className="form-control" 
                  value={num}
                  onChange={handleInputChange}/>
              </div>

              <div className="mb-3">
                <label className="form-label">Ingrese Avatar</label>
                <input 
                  name="img"
                  className="form-control"
                  type="file"
                  accept="image/*"
                  onChange={handleInputChangeImg}/>
              </div> 

            </div>
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
