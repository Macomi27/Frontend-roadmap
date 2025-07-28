// Functions
// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// Function Declaration
// syntax
// function name(parameter1, parameter2, ... parameterN) {
//  // body
// }

// Local variables
// A variable declared inside a function is only visible inside that function.

// Outer (Global) variables
// A function can access an outer variable and can modify it as well

// Parameters - arbitrary data passed to functions
// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).
// In a nutshell, We declare functions listing their parameters, then call them passing arguments.

// Default values - when an argument is not provided, the default value is used
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

// Returning a value - A function can return a value back into the calling code as the result.
// using return without a value causes the function to exit immediately
// A function with an empty return or without it returns undefined

// Naming a function - Functions are actions. So their name is usually a verb.
// It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
// One function – one action
// A function should do exactly what is suggested by its name, no more.

// Functions == Comments
// A separate function is not only easier to test and debug – its very existence is a great comment!

// Exercise 1 - Rewrite the function using '?' or '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
function checkAge(age) {
  age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

// Exercuse 2 - Function min(a, b)
function min(a, b) {
  return a < b ? a : b;
}
min(2, 5);
min(3, -1);
min(1, 1);

// Exercise 3 - Function pow(x,n)
function pow(x, n) {
  return x ** n;
}

pow(3, 2);
pow(3, 3);
pow(1, 100);

let getX = prompt("Enter x", "");
let getN = prompt("Enter n", "");
console.log(`${getX} in ${getN} returns: ${pow(getX, getN)}`);
