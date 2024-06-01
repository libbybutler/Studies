"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`i can drive :)`);

// const interface = `Audio`;
// const private = 534;
// const if =23;

// ------------------------------------

// function logger() {
//   console.log(`my name is Jonas`);
// }

// logger();

// ----------------------------------------

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ---------------------
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// --------------------------

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirment = 65 - age;
//   return `${firstName} retires in ${retirment} years`;
// };
// console.log(yearsUntilRetirement(1991, `Jonas`));
// console.log(yearsUntilRetirement(1999, `Libby`));

// --------------------------

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
// -----------------------
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirment = 65 - age;

//   if (retirment > 0) {
//     console.log(`${firstName} retires in ${retirment} years`);
//     return retirment;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// return `${firstName} retires in ${retirment} years`;
// };

// console.log(yearsUntilRetirement(1999, `Libby`));

// ------------------------

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} VS ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} VS ${avgDolphins})`);
//   } else {
//     console.log(`No one wins.`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const year = new Array(1991, 2024, 2000, 2015);
// console.log(year[2]);
// year[3] = 1999;
// console.log(year);

// const friends = [`charlotte`, `Aaron`, `Paula`];

// const firstName = "libby";
// const libby = [firstName, `butler`, 2024 - 1999, `learning coding`, friends];

// console.log(libby);

// ----------------------------------

// const calcAge = function (years) {
//   return 2037 - years;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// -------------------------

// const friends = [`charlotte`, `Aaron`, `Paula`];
// const newLength = friends.push(`Jay`);

// console.log(friends);
// console.log(newLength);

// friends.unshift(`john`);
// console.log(friends);

// friends.shift();

// console.log(friends);

// console.log(friends.indexOf(`Paula`));

// console.log(friends.includes(`Paula`));

// ---------------------------

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

const jonas = {
  firstname: `jonas`,
  lastName: `Schmedtmann`,
  age: 2027 - 1991,
  job: `teacher`,
  friends: [`michael`, `peter`, `steven`],
};

console.log(jonas.lastName);
