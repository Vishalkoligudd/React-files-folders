import React from 'react'
import Logo from './Logo'
import Input from './Input'
import Menu from './Menu'

function Nav() {
  return (
    <div className='navbar'>
    <Logo/>
    <Input/>
    <Menu/>
    </div>
  )
}

export default Nav