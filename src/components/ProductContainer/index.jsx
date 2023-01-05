import React from 'react'
import Product from '../Product'
import s from './index.module.css'

export default function ProductContainer({products}) {
  return (
    <div className={s.product_container}>
        {
            products.map(el => <Product key={el.id} {...el}/>)
        }
    </div>
  )
}
