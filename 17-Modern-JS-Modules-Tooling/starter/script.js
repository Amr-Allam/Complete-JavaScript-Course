// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
import add from './shoppingCart.js'; // importing the default

// we usually never Mix default and named exports (it's recommended to use one default export per module)
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing module');

add('pizza', 10);
ShoppingCart.addToCart('bread', 5);

console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

console.log(ShoppingCart.cart); // cart here is connected to the value we exported not just a copy (they are the same object / point to the same place in memory)
