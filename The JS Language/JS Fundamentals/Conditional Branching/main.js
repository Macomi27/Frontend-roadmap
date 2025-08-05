// The “if” statement - evaluates a condition in parentheses and, if the result is true, executes a block of code.
// syntax
// if (condition) {
// code to execute if condition is true
// }

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
if (0) {
  // 0 is falsy
  //  ...
}

// Other values become true, so they are called “truthy”.
if (1) {
  // 1 is truthy
  //   ...
}

// The “else” clause - executes when the condition is falsy.
// if (condition){
//     code to execute if condition is true
// }else {
//     code to execute if condition is false
// }

//  “else if” - allows to check multiple conditions in a chain.
// if (condition1) {
//     code to execute if condition1 is true
// } else if (condition2) {
//     code to execute if condition2 is true
// } else {
//     code to execute if both conditions are false
// }

// Conditional operator (ternary) ‘?’ - a shorthand for the if-else statement.
// syntax
// condition ? exprIfTrue : exprIfFalse;

// A sequence of question mark operators ? can return a value that depends on more than one condition.
// let age = prompt("age?", 18);

// let message =
//   age < 3
//     ? "Hi, baby!"
//     : age < 18
//     ? "Hello!"
//     : age < 100
//     ? "Greetings!"
//     : "What an unusual age!";

// console.log(message);

// The purpose of the question mark operator ? is to return one value or another depending on its condition. Use if to execute different branches of code.

// Exercise1: Will the result be shown?
if ("0") {
  console.log("Hello");
} //yes

//Exercise2
// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
let officialName = prompt(`What is the "official" name of JavaScript?`, "");
if ("ECMAScript") {
  console.log("Right!");
} else {
  console.log(`You don't know? "ECMAScript`);
}

// Exercise 3: show the sign
let number = prompt("Input a number", "");
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else if (number == 0) {
  alert(0);
}

// Exercise 4 - Rewrite 'if' into '?'
let result;
a + b < 4 ? (result = "Below") : (result = "Over");

// Exercise 5 - Rewrite 'if..else' into '?'
let newMessage;
login == Employee
  ? (newMessage = "Hello")
  : login == Director
  ? (newMessage = "Greetings")
  : login == ""
  ? (newMessage = "No login")
  : (newMessage = "");
