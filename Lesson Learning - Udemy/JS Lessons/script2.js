var output = [];
var count = 1;

function fizzBuzz() {
  console.log(output);

  if (count % 3 === 0 && count % 5 === 0) {
    output.push("Fizzbuzz");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;
}

// 3 = fizz, 5= buzz
