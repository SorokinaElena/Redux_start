import React from 'react'
import {CloseCircleOutlined} from '@ant-design/icons'
import { deleteProduct } from '../../store/reducers/productReducer'
import { useDispatch } from 'react-redux'
import s from './index.module.css'

export default function Product({id, title, price}) {

  const dispatch = useDispatch();

  return (
    <div className={s.product}>
        <CloseCircleOutlined className={s.close_icon} onClick={() => dispatch(deleteProduct(id)) }/>
        <p>Title: {title} </p>
        <p>Price: {price} </p>
    </div>
  )
}
