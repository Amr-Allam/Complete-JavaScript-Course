// Assignment 1
const country = "Egypt";
const continent = "Africa";
let population = 100;
// console.log(country);
// console.log(continent);
// console.log(population);

// Assignment 2
let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Assignment 3
language = "Arabic";
// changed some variables to const

// Assignment 4
population = 100 / 2;
population++;
// console.log(population);
const finlandPop = 6;
// console.log(population <= finlandPop);

let description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
// console.log(description);

// if (population > 33) {
//   console.log(`Egypt's population is above average`);
// } else {
//   console.log(`Egypt's population is ${33 - population} million below average`);
// }

// let numNeighbours = Number(
//   prompt(`How many neighbour countries does your country
// have?`)
// );

// if (numNeighbours === 1) {
//   console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

// if (language === "Arabic" && population < 50 && isIsland) {
//   console.log(`You should live in Egypt!`);
// } else {
//   console.log(`Egypt doesn't meet your criteria`);
// }

// switch (language) {
//   case "Chinese":
//   case "Mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "Spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "English":
//     console.log("3rd place");
//     break;
//   case "Hindi":
//     console.log("Number 4");
//     break;
//   case "Arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
