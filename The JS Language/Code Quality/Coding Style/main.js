// Syntax - Cheat Sheet
// No space -
// between the function name and paranthesis
// between the paranthesis and the parameter

// A space between parameters

// Curly brace { on the same line, after a space

// Indentation - 2 spaces

//  A space after for/if/while...

// Spaces arounf operators

// A semicolon; is mandatory

// A space between arguments

// An empty line between logical blocks

// Lines are not very long - 80 or 120 characters max

// } else { without a line break

// Spaces around a nested call

// Style Guides
// A style guide contains general rules about “how to write” code, e.g. which quotes to use, how many spaces to indent, the maximal line length, etc. A lot of minor things.
// When all members of a team use the same style guide, the code looks uniform, regardless of which team member wrote it.
// Some popular choices:
// Google JavaScript Style Guide
// Airbnb JavaScript Style Guide
// Idiomatic.JS
// StandardJS

// Automated Linters
// Linters are tools that can automatically check the style of your code and make improving suggestions.
// some well-known linting tools:
// JSLint – one of the first linters.
// JSHint – more settings than JSLint.
// ESLint – the newest one.

// Task - what's wrong with the code style below? - Fix it
// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

// The fixed variannt
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");
if (n <= 0) {
  alert(
    `Power ${n} is not supported, please enter an integer number greater than zero`
  );
} else {
  alert(pow(x, n));
}
