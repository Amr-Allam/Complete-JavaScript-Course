'use strict';

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
  // console.log(booking);
};

createBooking(11, 33);
createBooking(22, undefined, 66);

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// function didn't change it because it's a primitive type (just copied the value)

// console.log(jonas);
// function changed it because it's a reference type (it just copies the reference to that object in the memory heap so they point to the same object in memory)

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
// checkIn(flight, jonas);
// --------------------------------------------------------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const myName = 'amr emad el-din youssef';

// console.log(upperFirstWord(myName));

const transformer = function (str, fn) {
  // console.log(`Original string ${str}`);
  // console.log(`Transformed string ${fn(str)}`);
  // console.log(`Transformed by: ${fn.name}`);
};

// transformer(myName, upperFirstWord);
// console.log("------------------");
// transformer(myName, oneWord);

// const greet = (greeting) => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet("Hey")("Amr");

const addtax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addtax(0.23);
// console.log(addVAT(100));

// --------------------------------------------------------

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const poll = Number(
    prompt(`What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)`)
  );

  if (Number.isInteger(poll) && 0 <= poll && poll < this.answers.length) {
    this.answers[poll]++;
  } else if (!Number.isInteger(poll)) {
    alert('Enter a number');
  } else {
    alert(`Enter a number between 0 and ${this.answers.length - 1}`);
  }
  const results = prompt('Display results as an array or a string?');

  this.displayResults(results);
};

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    // console.log(`Poll results are ${this.answers.join(', ')}`);
  }
};

const pollFun = poll.registerNewAnswer.bind(poll);

document.querySelector('.poll').addEventListener('click', pollFun);

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

///////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
