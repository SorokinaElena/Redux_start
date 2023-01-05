import React from 'react'
import s from './index.module.css'

export default function AddProductForm({addProduct}) {

    const submit = (event) => {
        event.preventDefault();
        const {title, price} = event.target;
        addProduct(title.value, price.value);
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
