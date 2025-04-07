"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const egypt = describeCountry("Egypt", 100, "Cairo");
const germany = describeCountry("Germany", 50, "Berlin");
const canada = describeCountry("Canada", 66, "Ottawa");
// console.log(`${egypt} \n${germany} \n${canada}`);

// Function Declaration (statement)
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// console.log(percentageOfWorld1(1441));
// console.log(percentageOfWorld1(100));
// console.log(percentageOfWorld1(72));

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// console.log(percentageOfWorld2(1441));
// console.log(percentageOfWorld2(100));
// console.log(percentageOfWorld2(72));

// Arrow Function (a special function expression)
const percentageOfWorld3 = (population) => (population / 7900) * 100;

// console.log(percentageOfWorld3(1441));
// console.log(percentageOfWorld3(100));
// console.log(percentageOfWorld3(72));

// const describePopulation = function (country, population) {
//   console.log(
//     `${country} has ${population} million people which is about ${percentageOfWorld2(
//       100
//     )}% of the world`
//   );
// };

// describePopulation("Egypt", 100);

const populations = [100, 200, 300, 400];
// console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

// console.log(percentages);

const neighbours = ["Canada", "America", "England"];
neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// console.log(
//   neighbours.includes("Germany")
//     ? true
//     : "Probably not a central European country :D"
// );

neighbours[neighbours.indexOf("Utopia")] = "Germany";
// console.log(neighbours);

const myContry = {
  country: "Egypt",
  capital: "Cairo",
  language: "Arabic",
  population: 100,
  neighbours: ["Sudan", "Libya", "Palestine"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
};

// myContry.population += 2;
// console.log(myContry.population);
// myContry["population"] -= 2;
// console.log(myContry.population);

// myContry.describe();
// console.log(myContry.checkIsland());

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
// console.log(`percentages: ${percentages} \npercentages2: ${percentages2}`);

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
// console.log(`percentages: ${percentages} \npercentages3: ${percentages3}`);
