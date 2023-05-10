import React, {useRef} from "react";

import Input from "../../UI/input";
import classes from "./meal-item-form.module.css";

function MealItemForm(props) {
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault(); /* to make sure that the browser default page reloading is prevented */

    const enteredAmount = amountInputRef.current.value;
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
      </form>
    </>
  );
}

export default MealItemForm;
