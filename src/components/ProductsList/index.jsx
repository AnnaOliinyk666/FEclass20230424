import React from 'react'
import ProductsItem from '../ProductsItem'
import { useSelector } from 'react-redux'

export default function ProductsList() {
    const products = useSelector(state => state.products.list)
  return (
    <div>
      <h2>Products</h2>
      <div>
        {
              products.map(item => <ProductsItem key={item.id} {...item}/>)
          }
      </div>
        
    </div>
  )
}
