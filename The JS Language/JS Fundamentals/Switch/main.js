// The "switch" statement
// A switch statement can replace multiple if checks.
// The switch has one or more case blocks and an optional default.
// switch(x) {
//   case 'value1':  // if (x === 'value1')
//     ...
//     [break]

//   case 'value2':  // if (x === 'value2')
//     ...
//     [break]

//   default:
//     ...
//     [break]
// }

// The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
// If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
// If no case is matched then the default code is executed (if it exists).

// Grouping of “case”
// Several variants of case which share the same code can be grouped.

// Exercise 1: - Rewrite the "switch" into an "if"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser;
if (browser == "Edge") {
  alert(`You've got the Edge!`);
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// Exercise2: Rewrite "if" into "switch"
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3: //grouping of case 2 and case 3
    alert("2,3");
}
