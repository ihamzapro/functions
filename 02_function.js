function calculateCardPrice(val1, val2, ...num1) {
  // ... is a rest operator which collect all value and return in the form of Arrays
  return num1;
}
console.log(calculateCardPrice(100, 200, 300, 400, 500, 600));

const user = {
  username: "Hamza",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username}, and price is ${anyobject.price}`
  );
}

handleObject(user); //We also pass the object information directly

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(anyArray) {
  return anyArray[0];
}

// console.log(returnSecondValue(myNewArray));
//We also write this in this way see given below

console.log(returnSecondValue([200, 300, 400, 500]));
