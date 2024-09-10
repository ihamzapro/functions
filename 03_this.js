const user = {
  userName: "Hamza",
  price: 1000,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
// If I change the value of userName
user.userName = "Haider";
user.welcomeMessage();
// console.log(this);      //this will not show anything {} because we are work in node environment but in windows it will show many things

// function coffee()
// {
//     let username = "Hamza"
//     console.log(this.username)  // This will show undefined because it works in only objects
// }
// coffee()

// const coffee = function () {
//   let username = "Hamza";
//   console.log(this.username); // This will show undefined because it works in only objects
// };
// coffee();

// const coffee = () => {     //Arrow Function
//   let username = "Hamza";
//   console.log(this.username);
// };
// coffee()

// People say we not used "this" in arrow functions this statement is incorrect

// ++++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// const add = (num1, num2) => num1 + num2; // Implicit Function
// console.log(add(5, 8));

// const add = (num1, num2) => (num1 + num2); // This technique is very useful in react.js
// console.log(add(8, 9));
