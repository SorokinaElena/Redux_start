import React from 'react'
import {CloseCircleOutlined} from '@ant-design/icons'
import s from './index.module.css'

export default function Product({title, price}) {
  return (
    <div className={s.product}>
        <CloseCircleOutlined className={s.close_icon}/>
        <p>Title: {title} </p>
        <p>Price: {price} </p>
    </div>
  )
}
