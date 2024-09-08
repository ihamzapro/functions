// function addTwoNumbers(number1, number2) {  // when we write in bracket is called parameters
//   console.log(number1 + number2);
// }

// addTwoNumbers(5, 8); // When we write in bracket is called arguments

// function addTwoNumbers(number1, number2) {
//   //   let result = number1 + number2;
//   //   return result;

//   return number1 + number2;
// }

// const result = addTwoNumbers(5, 6);
// console.log("Result: ", result);

function loginUserMessage(userName) {
  //We would also do a default value  userName = "Haider"
  if (!userName) {
    // !username is same work as this work userName === undefined
    return console.log("Please enter a username");
  }
  return `${userName} is logged in`;
}
// console.log(loginUserMessage("Hamza"));
console.log(loginUserMessage()); //When we pass nothing result is undefined
