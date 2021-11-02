let number = 1;
while (number < 100) {
    if (number % 5 == 0) {
    console.log("Buzz");
    let number =number + 1;
    }
    else if (number % 3 == 0) {
    console.log("Fizz"); 
    let number = number + 1;
    break;
    }
    else {
    console.log(number) 
    let number = number + 1;
    }
}