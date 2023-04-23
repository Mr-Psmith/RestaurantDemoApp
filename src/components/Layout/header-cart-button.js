import React from "react";

import CartIcon from "../Cart/cart-icon";
import classes from "./header-cart-button.module.css";

const CartButton = (props) => {

    return(
        <>
            <div className={classes.button} >
                <span className={classes.icon} >
                    <CartIcon />
                </span>
                <span className={classes.button} > Your Cart </span>
                <span className={classes.badge} >
                    3{/* the total values, but needs a calculation yet */}
                </span>
            </div>    
        </>
    );
};

export default CartButton;