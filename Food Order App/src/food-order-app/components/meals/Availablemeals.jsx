import React from 'react'
import Card from '../card/Card';
import classes from "./Availablemeals.module.css"
import MealsItem from './MealsItem';


function Availablemeals() {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
     const mealsname= DUMMY_MEALS.map((meal)=>
     <MealsItem 
     key={meal.id} 
     meal={meal}
     />)
  return (
    <section className={classes.meals}>
        <ul>
            <Card>
            {mealsname}
            </Card>
           
            
           
        </ul>
        </section>
  )
}

export default Availablemeals