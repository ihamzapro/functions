// IIFE(Immediately Invoked Function Expressions)

(function coffee() {
  //IIFE it is also called name IIFE because this function have some name
  console.log(`DB CONNECTED`);
})(); // The ; is important when we use IIFE

// (function define)(fuction call)

// Why we use IIFE?
// There is a problem because of global scope pollution so for this we use IIFE

((name) => {
  //IIFE, unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("Hamza");
