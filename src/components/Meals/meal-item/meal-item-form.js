import React, {useRef, useState} from "react";

import Input from "../../UI/input";
import classes from "./meal-item-form.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
 

  const submitHandler = event => {
    event.preventDefault(); /* to make sure that the browser default page reloading is prevented */

    const enteredAmount = amountInputRef.current.value; /* It is always .current for refs created with useRef. "amountInputRef.current" part is pointing to the inpőut elemetn  */
    const enteredAmountNumber = +enteredAmount; /* this will convert the string to a number. bec the .value abowe will always generate a string */

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCartPr(enteredAmountNumber);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef} /* as this is a custom comp, the ref prop doesnt work out of the box, we are wrapping input.js comp with React.forwardRef */
          labelProps="Amount"
          inputProps={{
            id: "amount_" + props.id, /* dont understand why this is unique */
            type: "number",
            min: "1",
            max: "99",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
        {!amountIsValid && <p>Please enter a Valid Amount (1-5)!</p>}
      </form>
    </>
  );
}

export default MealItemForm;
