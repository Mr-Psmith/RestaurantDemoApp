import React from "react";

import CartIcon from "../Cart/cart-icon";
import classes from "./header-cart-button.module.css";

const CartButton = (props) => {

    const openModalHandlerPr = () => {
        /* props.openModalHandlerPr(event.target.value); */
      };
    

    return(
        <>
            <button className={classes.button} onClick={props.onClickPr} >
                <span className={classes.icon} >
                    <CartIcon />
                </span>
                <span className={classes.button} > Your Cart </span>
                <span className={classes.badge} >
                    3{/* the total values, but needs a calculation yet */}
                </span>
            </button>    
        </>
    );
};

export default CartButton;