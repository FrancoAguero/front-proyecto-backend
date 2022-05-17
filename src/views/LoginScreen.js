import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginFrom } from '../components'
import { useGetAllProductsQuery } from '../store/apis/productsApi'

const LoginScreen = () => {

  return (
    <div className="container justify-content-center align-items-center h-100">
      <div className="row" >
        <div className="col-12">
          <LoginFrom  />
        </div>
      </div>
      
    </div>
  )
}

export default LoginScreen

