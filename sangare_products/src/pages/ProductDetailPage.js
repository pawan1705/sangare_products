import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductDetail from '../features/product-list/components/ProductDetail';
const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
      <ProductDetail></ProductDetail>
      </Navbar>
    </div>
  )
}

export default ProductDetailPage;