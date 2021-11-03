let number = 1;
while (number < 101) {
  if (number % 5 == 0 && number % 3 == 0) {
    console.log("FizzBuzz");
    number = number + 1;
}
    else if (number % 5 == 0) {
    console.log("Buzz");
    number = number + 1;
  } 
  else if (number % 3 == 0) {
    console.log("Fizz");
    number = number + 1;
  } 
  else {
    console.log(number);
    number = number + 1;
  }
}
