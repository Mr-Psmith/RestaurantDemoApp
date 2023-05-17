import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./cart.module.css";
import CartContext from "../../store/cart-context";


const Cart = (props) => {
  const cartCtx = useContext(CartContext); 

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; /* toFixed(2) is for to decimals, and the `$$...` shit is for the $ sign. ofc there is the question that wouldnt this be easier to just write ${} in the jsx instead of this backtick shit, but who I am to know */
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={classes.cartItemscl}>
      {cartCtx.items.map(
        (item) => (
          <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  );

  return (
    <Modal closeCartHandlerPr2={props.closeCartHandlerPrToTheApp}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button  className={classes["button--alt"]} onClick={props.closeCartHandlerPrToTheApp} >Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
