import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';

// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { DECREASE, INCREASE } from './actions';
import reducer from './reducer';

// initial store
// const initialStore = {
//   cart: cartItems,
//   total: 105,
//   amount: 5,
// };

// store
// const store = createStore(reducer, initialStore);
const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </Provider>
  );
}

export default App;
