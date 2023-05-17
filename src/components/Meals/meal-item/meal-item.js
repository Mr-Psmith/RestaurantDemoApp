import React, { useContext } from 'react';

import MealItemForm from './meal-item-form';
import classes from "./meal-item.module.css";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;/* Template litteral with two dollar sing one bec of the templatel., other bec of the dynamic value */
  /* this shit is for making sure that this has always two decimals. first time for everything */

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <>
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCartPr={addToCartHandler} /* onAddToCart={addToCartHandler} */ />
            </div>
        </li>
    </>
  );
}

export default MealItem;
