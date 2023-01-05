import React, {useContext} from 'react'
import Product from '../Product'
import { Context } from '../../context'
import s from './index.module.css'

export default function ProductContainer() {

  const {products} = useContext(Context);

  return (
    <div className={s.product_container}>
        {
            products.map(el => <Product key={el.id} {...el} />)
        }
    </div>
  )
}
