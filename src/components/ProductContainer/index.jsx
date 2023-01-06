import React from 'react'
import Product from '../Product'
import { useSelector } from 'react-redux'
import s from './index.module.css'

export default function ProductContainer() {

  const state = useSelector(state => state.products)
  // console.log(state)

  return (
    <div className={s.product_container}>
        {
            state.map(el => <Product key={el.id} {...el} />)
        }
    </div>
  )
}
