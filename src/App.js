import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';

// redux stuff
// store - store data, think of state

// reducer - function that used to update store
// two arguments - state, action
// action - what happened / what update
// return updated or old state

import { createStore } from 'redux';

// store.getState()

// reducer
const reducer = (state, action) => {
  console.log({ state, action });
  return state;
};

// initial store
const initialStore = {
  count: 0,
};

// store
const store = createStore(reducer, initialStore);
console.log(store.getState());
function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
