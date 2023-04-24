import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/slice/productsSlice';
import { add } from '../../store/slice/basketSlice';

export default function ProductsItem({id,title,price}) {
    const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={()=>{dispatch(remove(id))}}>X</button>
        <button onClick={() => {dispatch(add(id))}}>add to basket</button>
    </div>
  )
}
