import {useContext} from "react";

import CartIcon from "../Cart/cart-icon";
import CartContext from "../../store/cart-context";
import classes from "./header-cart-button.module.css";

const CartButton = (props) => {
    const cartCtx = useContext(CartContext); /* By using useContext here this comp will be evaluated every time the context changes, like when we update it ofc */

    const numberOfCartItems = cartCtx.items.length;

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