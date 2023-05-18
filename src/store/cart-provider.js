// NEVER DONE ENYTHING LIKE THOS, BUT I AM UNDER EVERYTHING NOW AFTER 2 HOUR OF DEBUGGING. THIS IS BELOW MY FAULTY CODE, UNDER IT IS THE INTRUCTOR EXAMLE WHICH IS WORKING. SO SOMEWHERE THERE IS A MISSPELL PROB IN MY CODE OR SOMETHING. MAYBE TOMORROW I DO THIS, MAYBE I DONT GIVE A SHIT ANYMORE AND JUST MOVE ON. EVERYTHING ELSE I repaired already.
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { 
    items: [],
    totalAmount: 0
}; 

const cartReducer = (state, action) => { /* we get the last state snapshot, and an action that we will "dispatch" "later in our code" */
    if (action.type === "ADD") { 
        /* We want to group items for the same meal together, and manage the amount on a per meal basis*/
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id); /* Searches the array for the index of en item, returnns true if finds it */
        const existingCartItem = state.items[existingCartItemIndex]; /* This will only work if we hae this item, already, otherwise it will be Null */
         
        /* From Lecture 146. we are fucking with this part */
        let updatedItems;

        if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem, /* We copy this but update the amount */
            amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        } else {
        updatedItems = state.items.concat(action.item);/* state.items are the items in the current state snapshot, which we get as the first argument in the reducer *//* we simply expect to have all the date opn this item */
        }

        return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        }

        
        return { /* And here we return a new state snapshot */
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }                                               
    return defaultCartState; /* And we return a new state snapshot */
};


/* This component manages the cart-context, and provides this context to all comp */
const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

        /* We get this vals, and do stuff wtih them and then manage them in the cartContext, =>and then send it to the moon... */
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item}); /* It is up to us what an action is, but typically it is an object, which has some property which allows us to idnetify this action inside the reducer Function. And its a "convention" to use "ALLCAPS" and string at the name of the identifier */
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id});
    };

    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children} {/* This allows us to wrap any comps, that should get acces that should get access to this context with this cart provider component. */}
    </CartContext.Provider>
};

export default CartProvider;


/* We want to check wether we do have an item already in cart, aor not yet, and if yes we onléy want to update the cart-numbers- not ad any new items =>State useState, or useReducer, the latter is better here as this is a complex state */

