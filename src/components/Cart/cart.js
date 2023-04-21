import classes from "./cart.module.css";

const Cart = (props) => {
  const cartItems = <ul className={classes.cartItemscl}>{[
    { id: "c1", name: "Dummy-Sushi", amount: 2, price: 12.99 },
  ].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <div>
        {cartItems}
        <div></div>
        <div></div>
    </div>
  );
};

export default Cart;
