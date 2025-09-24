// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
import add from './shoppingCart.js'; // importing the default

// we usually never Mix default and named exports (it's recommended to use one default export per module)
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');

add('pizza', 10);
ShoppingCart.addToCart('bread', 5);

// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

// console.log(ShoppingCart.cart); // cart here is connected to the value we exported not just a copy (they are the same object / point to the same place in memory)

/////////////////////////////////////////////////////////////////////////
// Top Level await (now blocks the scripts)
// const rest = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await rest.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const rest = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await rest.json();
  // console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////////////////////
// Importing libraries using npm
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js'; (we don't do this)
import { cloneDeep } from 'lodash-es'; // because of parcel

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

// To not let the page reload when i change this part (maintain the state of the page)
if (module.hot) {
  module.hot.accept();
}

// For polyfilling (add support for modern js features for old browsers)
import 'core-js/stable';
// import 'core-js/stable/array/find'; (To add a certain method only if we want)

// Polyfilling async functions
import 'regenerator-runtime/runtime';
