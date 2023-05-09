import {useContext} from "react";

import CartIcon from "../Cart/cart-icon";
import CartContext from "../../store/cart-context";
import classes from "./header-cart-button.module.css";

const CartButton = (props) => {
    const cartCtx = useContext(CartContext); /* By using useContext here this comp will be evaluated every time the context changes, like when we update it ofc */

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0); /*Using simple .length would be shit as with calculates with all the arrays length or something like that(there is an item length, and amount problematic(3sushi is 1 item 3 amount)) */
                                                            /* Thats why we use reduce, as this built in method reduces an array into a simple number */
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