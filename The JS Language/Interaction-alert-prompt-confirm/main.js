//Interactions: alert, prompt and confirm

//alert - it shows a message and waits for the user to press 'OK'
alert("Hello, World!");

//prompt - the prompt function accepts two args:
//  result = prompt(title, [default])
// [default = ""] - the second argument is optional
userName = prompt("What is your name?", "John Doe");
alert("Hello, " + userName + "!");

// confirm - it shows a modal window with a question and two buttons: OK and Cancel
// the result is true if OK is pressed and false otherwise
let isTeacher = confirm("Are you a teacher");
alert(isTeacher);

// Summary
// All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

// There are two limitations shared by all the methods above:

// The exact location of the modal window is determined by the browser. Usually, it’s in the center.
// The exact look of the window also depends on the browser. We can’t modify it.
