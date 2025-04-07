// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Challenge
// const testData1 = [17, 21, 23];
// const testData2 = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   let string = "";
//   for (let i = 0; i < arr.length; i++) {
//     string += `... ${arr[i]}°C in ${i + 1} days `;
//   }
//   console.log(`${string}...`);
// };

// printForecast(testData1);
// printForecast(testData2);

/* Coding Challenge #2
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a cretain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA 1: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

const analyzeWorkWeek = function (arr) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const totalHours = arr.reduce((sum, cur) => sum + cur, 0);
  const averageDailyHours = totalHours / arr.length;
  const maxDay = weekDays[arr.indexOf(Math.max(...arr))];
  const numberOfDays = arr.reduce((sum, cur) => (cur > 0 ? sum + 1 : sum), 0);
  const fullTime = totalHours >= 35 ? "Yes" : "No";

  return { totalHours, averageDailyHours, maxDay, numberOfDays, fullTime };
};

console.log(analyzeWorkWeek([7.5, 8, 6.5, 0, 8.5, 4, 0]));
