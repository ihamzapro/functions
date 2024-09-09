if (true) {
  const username = "Hamza";
  if (username === "Hamza") {
    const website = "youtube";
    console.log(username + website);
  }
  //console.log(website); // this is an error
}

//console.log(username); //This is an error

// ++++++++++++++++++++++++++++++++++Intersting Conncept ++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

// addone(5);
// addtwo(5);  //there is an error because of hositing consept and way we write function

const addtwo = function (num) {
  return num + 2;
};

addtwo(5);
