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
