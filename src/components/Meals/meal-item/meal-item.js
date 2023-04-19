import React from 'react';

import classes from "./meal-item.module.css";

function MealItem(props) {
  return (
    <>
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                {/* <MealItemForm id={props.id} onAddToCart={addToCartHandler} /> */}
            </div>
        </li>
    </>
  );
}

export default MealItem;
