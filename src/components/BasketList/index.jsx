import React from 'react'
import BasketItem from '../BasketItem'
import { useSelector } from 'react-redux'

export default function BasketList() {
    const basket = useSelector(state => state.basket.list)
    const products = useSelector(state => state.products.list)
    const data = basket.map (item => {
      const product = products.find(({id}) => id === item.id);
      return {...item, ...product};
    })
    
    
  return (
    <div>
        <h2>Basket</h2>
        <div>
            {
                data.map(item => <BasketItem key={item.id} {...item}/>)
            }
        </div>
       
    </div>
  )
}
