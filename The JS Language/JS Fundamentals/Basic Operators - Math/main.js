// The following math operations are supported:

// Addition +
// Subtraction -
// Multiplication *
// Division /
// Remainder % - The exponentiation operator a ** b raises a to the power of b
// Exponentiation ** - The exponentiation operator a ** b raises a to the power of b.

// String concatenation with binary +
let s = "my" + " string";
console.log(s);
// Note: if any of the operands is a string, then the other one is converted to a string too.
console.log("1" + 2 + 4);

// Other arithmetic operators work only with numbers and always convert their operands to numbers.
console.log(6 - "2");

// Numeric conversion, unary + - in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
let y = -2;
console.log(+y);
console.log(+true);
// The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?
let apples = "2";
let oranges = "3";
console.log(+apples + +oranges);

// Increment/decrement
// Increment ++ increases a variable by 1:
let counter = 2;
counter++;
console.log(counter);

// Decrement -- decreases a variable by 1:
let count = 2;
count--;
console.log(count);

//Comma - one of the rarest and most unusual operators.
// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
let a = (1 + 2, 3 + 4);
console.log(a);

// Exercises

// Task 1
let num = 1,
  b = 1;
let c = ++num; // 2
// console.log(c)
let d = b++; // 1
// console.log(d)

// Task 2
let num1 = 2;
let x = 1 + (num1 *= 2);
// num1 = 4
// x = 5
// console.log(num1); // 4
// console.log(x); // 5

// Tak 3
"" + 1 + 0; // = "10"
"" - 1 + 0; // = -1
true + false; // = 1
6 / "3"; // = 2
"2" * "3"; // = 6
4 + 5 + "px"; // = "9px"
"$" + 4 + 5; // = "$45"
"4" - 2; // = 2
"4px" - 2; // = NaN
"  -9  " + 5; // = "-95"
"  -9  " - 5; // = -14
null + 1; // = 1
undefined + 1; // = NaN
" \t \n" - 2; // = -2

// Task 4
let numx = prompt("First number?", 1);
let numy = prompt("Second number?", 2);

alert(+numx + +numy);
