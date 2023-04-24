import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../store/slice/productsSlice';
import s from './style.module.css'

export default function AddProduct() {
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        const product = {
            title: e.target.title.value, 
            price: +e.target.price.value, 
            id: Date.now()
        }
        dispatch(add(product));
        e.target.reset();
        
    }
  return (
    <div>
      <h2>Add Product</h2>
      <form className={s.form} onSubmit={onSubmit}>
              <input type="text" name='title' placeholder='title' />
              <input type="number" name='price' placeholder='price' />
              <button>add</button>
      </form>
    </div>
    
  )
}
