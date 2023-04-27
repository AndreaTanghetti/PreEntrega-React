import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    const iconoCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
<div className='contenedor'>
<img className='iconoCarrito' src={iconoCarrito} alt="" />
<strong>0</strong>
</div>
  )
}

export default CartWidget