// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";

// const birthYear = 1991;

// let age = 21;
// age = 25;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// --------------------------------------

// BMI = mass/(height*height)

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// -------------------------------------------------

/* const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonasNew); */

// --------------------------------------------

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// ------------------------------------------------

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// ------------------------------------------------

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(23));

// ----------------------------------------------------

// const age = 18;
// if (age === 18) console.log(`you just became an adult`);

// ----------------------------------

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense || hasGoodVision);
// console.log(hasDriversLicense && hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive...`);
// }

// --------------------------------

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// const scoreDolphines = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphines, scoreKoalas);

// if (scoreDolphines > scoreKoalas) {
//   console.log(`Dolphines win the trophy`);
// } else if (scoreKoalas > scoreDolphines) {
//   console.log(`Koalas win the trophy`);
// } else {
//   console.log(`Both win the trophy`);
// }

// const day = `friday`;
// switch (day) {
//   case `monday`:
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case `tuesday`:
//     console.log(`prepare theory videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`write code examples`);
//     break;
//   case `friday`:
//     console.log(`record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`enjoy the weekend`);
//   default:
//     console.log(`not a valid day`);
// }

var day = prompt(`What day is it?`);

if (day === `monday`) {
  console.log(`Plan course structure`);
  console.log(`Go to coding meet up`);
} else if (day === `tuesday`) {
  console.log(`prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
  console.log(`write code examples`);
} else if (day === `friday`) {
  console.log(`record videos`);
} else if (day === `saturday` || day === "sunday") {
  console.log(`enjoy the weekend`);
} else {
  console.log(`not a valid day`);
}
