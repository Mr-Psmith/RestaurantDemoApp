import CartContext from "./cart-context";

/* This component manages the cart-context, and provides this context to all comp */
const CartProvider = props => {
        /* We get this vals, and do stuff wtih them and then manage them in the cartContext, and then send it to the moon */
    const addItemToCartHandler = item => {};
    const removeItemFromCartHandler = id => {};

    const cartContext ={
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider valuePr={cartContext}>
        {props.children} {/* This allows us to wrap any comps, that should get acces that should get access to this context with this cart provider component. */}
    </CartContext.Provider>
};

export default CartProvider;