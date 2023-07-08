
import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'
function MealsItem(props) {
 let cartCtx= useContext(CartContext)
  const addToCartHandler=(amount)=>{
  cartCtx.addItem({
    id:props.meal.id,
    name:props.meal.name,
    amount:amount,
    price:props.meal.price
  })
  }
  return (
    <li className={classes.meal}>
    <div >
    <h3 >{props.meal.name}</h3>
    <div className={classes.description}>{props.meal.description}</div>
    <div className={classes.price}>{props.meal.price}</div>
    </div>
    <div>
        <MealItemForm id={props.id} onAddtocart={addToCartHandler}/>
    </div>
   
    </li>
        
  )
}

export default MealsItem