// Function expressions - a function, created inside an expression or inside another syntax construct.
// syntax
let sayHi = function () {
  alert("Hello");
};

// Callback functions - Functions which are passed and called back later, if necessary

// Summary
// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
// In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.
// So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
