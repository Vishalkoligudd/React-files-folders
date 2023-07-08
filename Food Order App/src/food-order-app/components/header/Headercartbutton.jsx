import React, { useContext } from 'react'
import clases from  "./headercart.module.css"
import CartContext from '../../store/cart-context'

function Headercartbutton(props) {
  const cartCtx=useContext(CartContext)
  const numberofCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0)
  return (
    <button className={clases.button} onClick={props.show}>
        <span className={clases.icon}>
        <img src="https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-260nw-1690453492.jpg" alt="" width='20px'/>
        </span>
        <span>your cart</span>
        <span className={clases.badge}>{numberofCartItems}</span>
    </button>
  )
}

export default Headercartbutton