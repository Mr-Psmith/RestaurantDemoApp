import React from "react";

import Input from "../../UI/input";
import classes from "./meal-item-form.module.css";

function MealItemForm(props) {
  return (
    <>
      <form className={classes.form}>
        <Input
          labelProps="Amount"
          inputProps={{
            id: "amount_" + props.id, /* dont understand why this is unique */
            type: "number",
            min: "1",
            max: "99",
            step: "1",
            defaulValue: "1",
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default MealItemForm;
