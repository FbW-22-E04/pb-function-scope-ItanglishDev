function acceptTwoNumbers(numOne, numTwo) {
  if (!isNaN(numOne) && !isNaN(numTwo)) {
    let i = 0;
    for (let i = 1; i < numTwo + 1; i++) {
      console.log(numOne ** i);
    }
    // let j = 0;
    // for (let j = 1; j < numOne + 1; j++) {
    //   console.log(numTwo ** j);
    // }
  } else {
    console.log("they are not both numbers!");
  }
}

acceptTwoNumbers(3, 5);

const favFruit = "banana";
function printfavouriteFruit() {
  let favFruit = "grapes";
  console.log(favFruit);
}
printfavouriteFruit();

let result = 0;
function exponent(b, c) {
  for (let i = 0; i < c; i++) {
    result += b * b;
    console.log(result);
  }
}

exponent(3, 5);

//Yes it is possible, but it's value remains as it was initially outside the function
