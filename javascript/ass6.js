const prompt = require("prompt-sync")();
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(prompt("enter the number : "));
}
const arrAns = arr.filter((data) => {
    return data % 2 == 0;
})
console.log(arrAns);
