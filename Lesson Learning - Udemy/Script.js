function main() {
  twoRows();
  turnRight();
  move();
  turnRight();
  twoRows();
  turnRight();
  move();
  turnRight();
  threeBeepers();
}

function twoRows() {
  threeBeepers();
  turnLeft();
  move();
  turnLeft();
  twoBeepers();
}

function threeBeepers() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function twoBeepers() {
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}

function main() {
  putBeeper();
  moveUp();
  turnRight();
  moveUp();
  turnRight();
  moveUp();
  turnRight();
  moveUp();
}

function moveUp() {
  move();
  turnLeft();
  move();
  putBeeper();
}
// ---------------------------------------

function getMilk(bottles) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log(
    "Robot bought " + bottles / 1.5 + " bottles of milk, leaving you with "
  );
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(12);

/* calculate the number of bottles the robot can buy. 
each bottle is $1.5 */

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("buy " + numberOfBottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);

/* calculate the number of bottles the robot can buy. 
each bottle is $1.5 */

function lifeInWeeks(age) {
  var daysLeft = (90 - age) * 365;
  console.log("You have " + "days, " + "weeks, and " + " months left.");
}

lifeInWeeks(25);

/*365 days in a year, 52 weeks in a year and 12 months in a year. you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.*/

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
  console.log(
    "Your current Weight is " + weight + " and your current height is " + height
  );
  console.log("Your BMI score is " + Math.floor(bmi));
}

function heightCalculation(height) {
  var newHeight = height * height;
}

function totalBmi(weight, heightCalculation) {
  var bmi = weight / heightCalculation;
  return bmi;
}

bmiCalculator(65, 1.8);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
console.log(n);

console.log(
  firstPerson +
    " and " +
    secondPerson +
    " have the capatability of:" +
    Math.round(n)
);

var firstName = prompt("What is your name?");
var secondName = prompt("What is your parners name?");
