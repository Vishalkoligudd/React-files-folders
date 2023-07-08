import React, { useState } from 'react'
import Header from './components/header/Header'
import Meals from './components/meals/Meals'
import "./global.css"
import Cart from './components/cart/Cart'
import CartProvider from './store/Cartprovider'


function App() {
  const [cartIsShown,setcart]=useState(false)
 let showcarthandler=()=>{
setcart(true)
  }
  let hidecarthandler=()=>{
    setcart(false)
      }
  return (
    <CartProvider>
     {cartIsShown && <Cart hide={hidecarthandler}/>} 
    <Header show={showcarthandler}/>
    <Meals/>
    </CartProvider>
  )
}

export default App