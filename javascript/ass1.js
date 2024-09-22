
const prompt = require("prompt-sync")();
const number = prompt("enter the number : ");
if (number > 0) {
    console.log("number is positive");
}
else if (number < 0) {
    console.log("number is negative");
}
else if (number == 0) {
    console.log("number is zero");
}
else {
    console.log("hamko nhi pata");
}
