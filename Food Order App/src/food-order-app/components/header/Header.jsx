import React, { Fragment } from 'react'
import image  from "../../img/meals.jpg"
import classes from "./header.module.css"
import Headercartbutton from './Headercartbutton'

function Header(props) {
  return (
    <Fragment>
    <header className={classes.header}>
   <h1>React meals</h1>
   <Headercartbutton show={props.show}/>
   </header>
    <div className={classes['main-image']}>
  <img src={image} alt="" />
  </div>
    </Fragment>
  )
}

export default Header