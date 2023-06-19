import { useState } from 'react';
import './App.css'; 
import Header from './components/Layout/header';
import BodyMeals from './components/Meals/body-meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';

function App() {

  const [showModal, setShowModal] = useState(false); /* Not an empty string as I put it */

  const openCartHandler = () => {
    setShowModal(true);
    console.log("WUTT");
  };
  const closeCartHandler = () => {
    setShowModal(false);
  };
  

  return ( 
    <CartProvider>
      {showModal && <Cart onClose={closeCartHandler}  />}
      <Header openModalHandlerPr={openCartHandler} />
      <main>
        <BodyMeals/>
      </main>
    </CartProvider>
  );
}

export default App;