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
