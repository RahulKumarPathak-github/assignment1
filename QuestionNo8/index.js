// Prompt the user to input a positive integer
let number = parseInt(prompt("Enter a positive integer:"));

// Initialize the sum variable
let sum = 0;
let i = 1;

// Use a do-while loop to calculate the sum of numbers from 1 to the given integer
do {
    sum += i;
    i++;
} while (i <= number);

// Print the result
console.log("The sum of numbers from 1 to " + number + " is: " + sum);