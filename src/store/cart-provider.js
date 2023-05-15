import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { 
    items: [],
    totalAmount: 0
}; 

const cartReducer = (state, action) => { /* we get the last state snapshot, and an action that we will "dispatch" "later in our code" */
    if (action.type === "ADD") { 
        /* We want to group items for the same mela tgether, and manage the amount on a per meal basis*/
        const updatedItems = state.items.concat(action.item);/* state.items are the items in the current state snapshot, which we get as the first argument in the reducer *//* we simply expect to have all the date opn this item */
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return { /* And here we return a new state snapshot */
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }                                               
    return defaultCartState; /* And we return a new state snapshot */
};


/* This component manages the cart-context, and provides this context to all comp */
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

        /* We get this vals, and do stuff wtih them and then manage them in the cartContext, =>and then send it to the moon... */
    const addItemToCartHandler = item => {
        dispatchCartAction({type: "ADD", itemFw: item}); /* It is up to us what an action is, but typically it is an object, which has some property which allows us to idnetify this action inside the reducer Function. And its a "convention" to use "ALLCAPS" and string at the name of the identifier */
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: "REMOVE", idfw: id});
    };

    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider valuePr={cartContext}>
        {props.children} {/* This allows us to wrap any comps, that should get acces that should get access to this context with this cart provider component. */}
    </CartContext.Provider>
};

export default CartProvider;


/* We want to check wether we do have an item already in cart, aor not yet, and if yes we onléy want to update the cart-numbers- not ad any new items =>State useState, or useReducer, the latter is better here as this is a complex state */