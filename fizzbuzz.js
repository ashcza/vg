function fizzbuzz() {

  for (var i = 1; i < 100; i++) {
    stringNum = i.toString();
    if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 || stringNum.includes("3")) {
      console.log("Fizz");
    } else if (i % 5 === 0 || stringNum.includes("5")){
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();
