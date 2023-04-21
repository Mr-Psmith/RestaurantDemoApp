import React from 'react';

import MealItemForm from './meal-item-form';
import classes from "./meal-item.module.css";

function MealItem(props) {
  const mrPrice = `$${props.price.toFixed(2)}`;/* Template litteral with two dollar sing one bec of the templatel., other bec of the dynamic value */
  /* this shit is for making sure that this has always two decimals. first time for everything */

  return (
    <>
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{mrPrice}</div>
            </div>
            <div>
                <MealItemForm id={props.id} /* onAddToCart={addToCartHandler} */ />
            </div>
        </li>
    </>
  );
}

export default MealItem;
