import Modal from "../UI/Modal";
import classes from "./cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cartItemscl}>
      {[{ id:"c1", name: "Dummy-Sushi", amount: 2, price: 12.99 }].map(
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
