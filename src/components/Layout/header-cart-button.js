import {useContext, useEffect, useState} from "react";

import CartIcon from "../Cart/cart-icon";
import CartContext from "../../store/cart-context";
import classes from "./header-cart-button.module.css";

const CartButton = (props) => {
    const [btnIsHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext); /* By using useContext here this comp will be evaluated every time the context changes, like when we update it ofc */

    const { items } = cartCtx; /* I dont really understand what is happening anymoe, just want to go to the next part whjere I can uncerstand sghit again. Lecture 148 */

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0); /*Using simple .length would be shit as with calculates with all the arrays length or something like that(there is an item length, and amount problematic(3sushi is 1 item 3 amount)) */
                                                            /* Thats why we use reduce, as this built in method reduces an array into a simple number */

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""} `;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300)

        /* This is a cleanup funmction which removes the timer if the button is removed, which can't happen here, but a good practise */
        return() => { /* but what can happen that If we add multiple items rapidly after each other, we wanna clear the old timer and make sure that a new timer is set and the old timer is, well, cleared.  */
            clearTimeout(timer); 
        };
    }, [items])

    return(
        <>
            <button className={btnClasses} onClick={props.onClickPr} >
                <span className={classes.icon} >
                    <CartIcon />
                </span>
                <span className={classes.button} > Your Cart </span>
                <span className={classes.badge} >
                    {numberOfCartItems}
                </span>
            </button>    
        </>
    );
};

export default CartButton; 