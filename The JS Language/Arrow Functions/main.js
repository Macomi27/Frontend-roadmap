// Arrow functions, the basics
// syntax
// let func = (arg1, arg2, ..., argN) => expression; - This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
// If there are no arguments, parentheses are empty, but they must be present:

// Summary
// Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
// With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

// Exercise: Rewrite the arrow function
let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
