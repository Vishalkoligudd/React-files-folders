import { useRef, useState } from 'react';
import Input from './Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [inputisvalid,setinput]=useState(true)
  const inputref= useRef()
  const submithandler=(e)=>{
e.preventDefault()
const enteredAmount=inputref.current.value;
const enteredAmountNumber=+enteredAmount
if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5){
  setinput(false)
  return;
}
props.onAddtocart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <Input
      ref={inputref}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
  { !inputisvalid &&   <p>please enter valid number</p>} 
  
    </form>
  );
};

export default MealItemForm;