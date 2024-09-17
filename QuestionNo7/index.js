// Prompt the user to input the current temperature
let temperature = prompt("Enter the current temperature in °C:");

// Convert the input to a number
temperature = parseFloat(temperature);

// Determine the weather condition using the ternary operator
let weatherCondition = (temperature > 30) ? "Hot" : "Moderate";

// Print the weather condition
console.log("The weather condition is: " + weatherCondition);