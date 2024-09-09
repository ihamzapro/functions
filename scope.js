var c = 50;
if (true) {
  let a = 20;
  const b = 40;
  var c = 40;
}

// console.log(a);    // a is not defined because a is in the block scope
// console.log(b);    // b is not defined because b is in the block scope
console.log(c); // c will be declare because of var var not understand scope

// important note : outside of {} is global scope and inside the {} is block scope, inside of {} the outer value is available but outside of {} cannot access inside values

// {} is ka andar wali value hum bahir sa access nahi kar sakta but {} ka andar sa hum bahir wali value access kar sakta hain

// Scope work in node is differnet and scope work in window is different so hamza be careful
