import React from "react";

const CartContext = React.createContext({
    items: [], /* these arrays wont be used, but gives better autocompletion later*/
    totalAmount: 0,
    addItem: (item) => {}, /* Recieves the itemtha shuold be added */
    removeItem: (id) => {} /* recieves an id to identify the item that should be removed from the cart */
});
