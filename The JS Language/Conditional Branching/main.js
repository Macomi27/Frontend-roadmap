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
let age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

alert(message);

// The purpose of the question mark operator ? is to return one value or another depending on its condition. Use if to execute different branches of code.

// Exercise: Will the result be shown?
if ("0") {
  console.log("Hello");
} //yes
