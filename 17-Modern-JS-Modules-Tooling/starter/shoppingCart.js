// console.log("Exporting module");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  // console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// when we want to export 1 value only per module
export default function (product, quantity) {
  cart.push({ product, quantity });
  // console.log(`${quantity} ${product} added to cart`);
}

// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');
