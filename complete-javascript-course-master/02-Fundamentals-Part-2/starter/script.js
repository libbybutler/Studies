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
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirment = 65 - age;

  if (retirment > 0) {
    return retirment;
  } else {
    return -1;
  }
  // return `${firstName} retires in ${retirment} years`;
};

console.log(yearsUntilRetirement(1999, `Libby`));
