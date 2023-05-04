import {useContext} from "react";

import CartIcon from "../Cart/cart-icon";
import CartContext from "../../store/cart-context";
import classes from "./header-cart-button.module.css";

const CartButton = (props) => {
    useContext(CartContext);


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