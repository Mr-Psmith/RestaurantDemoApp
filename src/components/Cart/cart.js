import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import CartContext from "../../store/cart-context";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes.cartItemscl}>
      {cartCtx.items.map(
        (item) => (
          <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal closeCartHandlerPr2={props.closeCartHandlerPrToTheApp}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Calcualting.....</span>
      </div>
      <div className={classes.actions}>
        <button  className={classes["button--alt"]} onClick={props.closeCartHandlerPrToTheApp} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
