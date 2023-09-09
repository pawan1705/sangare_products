import React from 'react'
import Signup from '../features/Auth/Signup';
import Navbar from '../features/navbar/navbar'
const SignupPage = () => {
  return (
    <div>
      <Navbar>
      <Signup></Signup>
      </Navbar>
    </div>
  )
}

export default SignupPage;