// // Loops: while and for

// // The “while” loop - While the condition is truthy, the code from the loop body is executed.
// // syntax
// // while (condition) {
// // code - "loop body"
// // }

// // The “do…while” loop - The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
// // syntax
// // do {
// // code - "loop body"
// // } while (condition);
// // This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy.

// // The “for” loop - The loop is executed a specific number of times, with the initialization, condition, and step defined in the loop header.
// // syntax
// // for (begin; condition; step) {
// // ... loop body ...
// // }

// // for (let i = 0; i < 3; i++) alert(i)
// // run begin
// let i = 0;
// // if condition → run body and run step
// if (i < 3) {
//   alert(i);
//   i++;
// }
// // if condition → run body and run step
// if (i < 3) {
//   alert(i);
//   i++;
// }
// // if condition → run body and run step
// if (i < 3) {
//   alert(i);
//   i++;
// }
// // ...finish, because now i == 3

// // Inline variable declaration - Such variables are visible only inside the loop.

// // Skipping parts - Any part of for can be skipped.
// // for (;;) {
// // repeats without limits
// // }

// // Breaking the loop - The break statement can be used to exit the loop immediately.
// // Continue to the next iteration - stops the current iteration and forces the loop to start a new one

// // Labels for break/continue - A label is an identifier with a colon before a loop
// // syntax
// // labelName: for (...) {
// //   ...
// // }
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// alert("Done!");

// // The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

// // Exercise 1 - Last loop value
// let a = 3;
// while (a) {
//   alert(a--);
// } // 1 - 0 is the last loop value which fails to meet the condition

// // Exercise 2 - Which values does the while loop show?
// // The prefix form ++b:
// let b = 0;
// while (++b < 5) alert(b); // 1, 2, 3, 4

// // The postfix form c++
// let c = 0;
// while (c++ < 5) alert(c); // 1, 2, 3, 4, 5

// // Exercise 3 - Which values get shown by the "for" loop?
// // The postfix form:
// for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

// // The prefix form:
// for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// // Exercise 4 - Output even numbers in the loop
// // Use the for loop to output even numbers from 2 to 10.
// for (let i = 2; i <= 10; i += 2) alert(i);

// // Exercise 5 - Replace "for" with "while"
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let d = 0;
// while (d < 3) {
//   alert(`number ${d}!`);
//   d++;
// }

// // Exercise 6 - Repeat until the input is correct
// // Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// // The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// // Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
// let input = prompt("Enter a number greater than 100", "");
// while (input <= 100 || input === null || input === "") {
//   prompt("Enter a number greater than 100", "");
// }
// alert(`You entered: ${input}`);

// // Exercise 7 - Output prime numbers
// // An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// // In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// // For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// // Write the code which outputs prime numbers in the interval from 2 to n.
// // For n = 10 the result will be 2,3,5,7.
// // P.S. The code should work for any n, not be hard-tuned for any fixed value.
let n = 10;
for (let i = 2; i <= n; i++) {
  if (i % 2 === 0 && i !== n) continue;
  console.log(i);
}
