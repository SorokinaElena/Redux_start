import React from 'react'
import Product from '../Product'
import s from './index.module.css'

export default function ProductContainer() {
  return (
    <div className={s.product_container}>
        <Product />
    </div>
  )
}
