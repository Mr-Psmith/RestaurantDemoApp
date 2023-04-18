import React from "react";

import CartIcon from "../Cart/cart-icon";
import classes from "./header-cart-button.module.css";

const CartButton = () => {

    const CartHandler = () => {
        console.log("Your order is under processing");
    };

    return(
        <>
            <div className={classes.button} >
                <span className={classes.icon} >
                    <CartIcon />
                </span>
                <span onClick={CartHandler} className={classes.button} > Your Cart </span>
                <span className={classes.badge} >
                    3{/* the total values, but needs a calculation yet */}
                </span>
            </div>    
        </>
    );
};

export default CartButton;