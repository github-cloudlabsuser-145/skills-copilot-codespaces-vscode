
// Function to add two numbers
function add(num1, num2) {
  return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero is not allowed";
  }
  return num1 / num2;
}

// Test the calculator functions
console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(2, 6)); // Output: 12
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Error: Division by zero is not allowed
