import React from 'react'
import {CloseCircleOutlined} from '@ant-design/icons'
import s from './index.module.css'

export default function Product({id, title, price, deleteProduct}) {
  return (
    <div className={s.product}>
        <CloseCircleOutlined className={s.close_icon} onClick={() => deleteProduct(id)}/>
        <p>Title: {title} </p>
        <p>Price: {price} </p>
    </div>
  )
}
