import React from 'react'
import Cart from '../features/cart/Cart';
import Navbar from '../features/navbar/navbar'
const CartPage = () => {
  return (
    <div>
      <Navbar>
      <Cart></Cart>
      </Navbar>
    </div>
  )
}

export default CartPage;