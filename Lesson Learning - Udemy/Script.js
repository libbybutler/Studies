function main() {
  twoRows();
  turnRight();
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
