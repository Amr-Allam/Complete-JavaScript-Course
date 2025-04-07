'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// // Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Changing variable names / adding default values
// const {
//   name: restaurantName,
//   openingHours: workingHours,
//   restaurantMenu: menu = [],
// } = restaurant;
// console.log(restaurantName, workingHours, menu);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested object destructuring
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // Using object destructuring function arguments
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'via del Sole, 21',
//   starterIndex: 1,
// });
// -----------------------------------------------------

// // Destructuring Arrays
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);

// // Switching positions using destructuring
// let [first, second] = restaurant.categories;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);

// // destructuring an array from a function
// [first, second] = restaurant.order(0, 1);
// console.log(first, second);

// // Nested destrucuring
// const nested = [2, 4, [5, 6]];
// const [i, , [, j]] = nested;
// console.log(i, j);

// // putting default values instead of getting undefined
// const [p, q, r = 1] = [8, 9];
// console.log(p, q, r);
// -----------------------------------------------------

// // The spread operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(wholeMenu);

// // Rest operator
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
// -----------------------------------------------------

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisicic'];
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Schulz', 'Lewandowski');
// printGoals(...game.scored);

// team1 > team2 || console.log('Team1 will win');
// team1 > team2 && console.log('Team2 will win');
// -----------------------------------------------------

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (let odd of odds) average += odd;
average /= odds.length;
// console.log(average);

for (let [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? `draw:` : `victory ${game[team]}:`;
  // console.log(`Odd of ${str} ${odd}`);
}

const scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);
//
// -----------------------------------------------------

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// Convert map to array
// console.log([...question]);
// -----------------------------------------------------

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// const Events = [...new Set(gameEvents.values())];
// console.log(Events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [time, event] of gameEvents.entries()) {
//   console.log(`[${time < 45 ? 'FIRST' : 'SECOND'} HALF] ${time}: ${event}`);
// }
// -----------------------------------------------------

// Working With Strings
const airLine = 'Tap Air Portugal';
const plane = 'A320';
// console.log(plane[0]);
// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

const correctName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};
// console.log(correctName('jOnAS'));

// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// Another Solution using regex (Old)
// console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane2 = 'A320neo';
// console.log(plane.includes('20'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('A'));

// Splitting
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// Padding
const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
// */
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   for (let word of text.split('\n')) {
//     word =
//       word.slice(0, word.indexOf('_')) +
//       word[word.indexOf('_') + 1].toUpperCase() +
//       word.slice(word.indexOf('_') + 2);
//     word = word.trim();
//     console.log(word);
//   }
// });

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   if (text === '') return;

//   for (let [index, word] of text.split('\n').entries()) {
//     word = word.toLowerCase().trim();
//     while (word[0] === '_') {
//       word = word.slice(1);
//     }
//     for (let letter of word) {
//       if (letter === '_' && word[word.indexOf('_') + 1]) {
//         word =
//           word.slice(0, word.indexOf(letter)) +
//           word[word.indexOf(letter) + 1].toUpperCase() +
//           word.slice(word.indexOf(letter) + 2);
//       }
//     }
//     word[word.length - 1] === '_' ? (word = word.slice(0, -1)) : word;
//     word = `${word.padEnd(20, ' ')}${'✅'.repeat(index + 1)}`;
//     console.log(word);
//   }
// });

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  if (text === '') return;

  for (let [index, word] of text.split('\n').entries()) {
    word = word.toLowerCase().trim();
    while (word[0] === '_') {
      word = word.slice(1);
    }
    word = word.split('_');
    word = `${word[0]}${word[1][0].toUpperCase()}${word[1].slice(1)}`;
    word[word.length - 1] === '_' ? (word = word.slice(0, -1)) : word;
    word = `${word.padEnd(20, ' ')}${'✅'.repeat(index + 1)}`;
    console.log(word);
  }
});

// String Methods Practice

let flights2 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

flights2 = flights2.split('+');
for (let [index, arr] of flights2.entries()) {
  arr = arr.split(';');
  arr[0] = arr[0].replace('_', '');
  if (index % 2 === 0) {
    arr[0] = arr[0].replace('_', ' ');
    arr[0] = `🔴 ${arr[0]}`;
  }
  arr[1] = `from ${arr[1].slice(0, 3).toUpperCase()} to`;
  arr[2] = arr[2].slice(0, 3).toUpperCase();
  arr[3] = `(${arr[3].replace(':', 'h')})`;
  flights2 = arr.join(' ');
  flights2 = flights2.padStart(44);
  console.log(flights2);
}
