let count = 0;

document.getElementById("counterDecrease").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("counterIncrease").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("counterReset").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}