import React from 'react'
import s from './index.module.css'
import { addProduct } from '../../store/reducers/productReducer'
import {useDispatch} from 'react-redux'

export default function AddProductForm() {

  const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        const {title, price} = event.target;
        dispatch(addProduct({
          title: title.value, 
          price: price.value,
        }));
        title.value = '';
        price.value = '';
    }

  return (
    <form className={s.add_product_form} onSubmit={submit}>
        <input type="text" name='title' placeholder='Title'/>
        <input type="text" name='price' placeholder='Price'/>
        <button>Add product</button>
    </form>
  )
}
