console.log("Enter 1 for addition");
console.log("Enter 2 for subtraction");
console.log("Enter 3 for multiplication");
console.log("Enter 4 for division");

const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter your choice: "));

switch (number) {
    case 1:
        {
            const a = parseFloat(prompt("Enter the first number: "));
            const b = parseFloat(prompt("Enter the second number: "));
            console.log("Result:", a + b);
            break;
        }
    case 2:
        {
            const a = parseFloat(prompt("Enter the first number: "));
            const b = parseFloat(prompt("Enter the second number: "));
            console.log("Result:", a - b);
            break;
        }
    case 3:
        {
            const a = parseFloat(prompt("Enter the first number: "));
            const b = parseFloat(prompt("Enter the second number: "));
            console.log("Result:", a * b);
            break;
        }
    case 4:
        {
            const a = parseFloat(prompt("Enter the first number: "));
            const b = parseFloat(prompt("Enter the second number: "));

            console.log("Result:", a / b);
            break;
        }
    default:
        console.log("Invalid choice. Please enter a number between 1 and 4.");
}
