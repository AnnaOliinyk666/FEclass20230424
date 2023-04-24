import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decrement, increment, remove } from '../../store/slice/basketSlice';

export default function BasketItem({id,title,count,price}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>count: {count}</p>
        <p>price: {price}$</p>
        <div>
          <button onClick={() => dispatch(increment(id))}>+</button>
          <button onClick={() => dispatch(decrement(id))}>-</button>
        </div>
        
        <button onClick={() => dispatch(remove(id))}>x</button>
    </div>
  )
}
