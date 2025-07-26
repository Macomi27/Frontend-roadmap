// Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

// || (OR) -  If any of its arguments are true, it returns true, otherwise it returns false.
// The OR || operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.

// && (AND) - If all of its arguments are true, it returns true, otherwise it returns false.
// The AND && operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// ! (NOT) - It inverts the boolean value of its operand.
//syntax - result = !value;
// The operator accepts a single argument and does the following:
// Converts the operand to boolean type: true/false.
// Returns the inverse value.

// A double NOT !! is sometimes used for converting a value to boolean type:

//Exercise 1 - What's the result of OR?
alert(null || 2 || undefined); // 2

//Exercise 2 - What's the result of OR'ed alerts?
alert(alert(1) || 2 || alert(3)); // 1, 2

//Exercise 3 - What is the result of AND?
alert(1 && null && 2); // null

//Exercise 4 - What is the result of AND'ed alerts?
alert(alert(1) && alert(2)); // 1, undefined

//Exercise 5 - The result of OR AND OR
alert(null || (2 && 3) || 4); // 3

//Exercise 6 - Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
if (age >= 14 && age <= 90)
  if (!(age >= 14) && !(age <= 90))
    if (age < 14 && age > 90)
      if (-1 || 0)
        //Exercise 7 - Check the range outside
        // Write an if condition to check that age is NOT between 14 and 90 inclusively.
        //Exercise 8 - A question about "if"
        alert("first"); // 'first
if (-1 && 0) alert("second"); // empty
if (null || (-1 && 1)) alert("third"); // third

//Exercise 9 - Check the login
// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
let login = prompt("What is your name?", "");
let password;
if (login === "" || login === null) {
  alert("Canceled");
} else if (login !== "Admin") {
  alert("I don't know you");
} else if (login === "Admin") {
  password = prompt("Enter your password", "");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === "" || password === null) {
    alert("Canceled");
  } else if (password !== "TheMaster") {
    alert("Wrong password");
  }
}

// Nullish coalescing operator '??' - syntax to get the first “defined” value of the two.
// it treats null and undefined similarly,
//  a value is “defined” when it’s neither null nor undefined.
// The result of a ?? b is: === result = (a !== null && a !== undefined) ? a : b;
// if a is defined, then a,
// if a isn’t defined, then b.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// The important difference between OR and the nullish coalescing operator is that:
// || returns the first truthy value.
// ?? returns the first defined value.
