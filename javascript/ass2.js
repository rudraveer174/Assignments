const prompt = require("prompt-sync")();
const age = prompt("enter the age : ");
if (age >= 18) {
    console.log("you are eligible for vote");
}
else if (age < 18) {
    console.log("you are not eligible for vote ");
}
else {
    console.log(" invalid input ");
}
