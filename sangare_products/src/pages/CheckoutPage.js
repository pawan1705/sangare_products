import React from 'react'
import Checkout from '../features/Checkout/Checkout';
import Navbar from '../features/navbar/navbar'
const CheckoutPage = () => {
  return (
    <div>
      <Navbar>
      <Checkout></Checkout>
      </Navbar>
    </div>
  )
}

export default CheckoutPage;