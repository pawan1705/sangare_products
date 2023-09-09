import React from 'react'
import Login from '../features/Auth/Login';
import Navbar from '../features/navbar/navbar'
const LoginPage = () => {
  return (
    <div>
      <Navbar>
      <Login></Login>
      </Navbar>
    </div>
  )
}

export default LoginPage;