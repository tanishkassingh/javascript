const prompt = require("prompt-sync")();
let arr = [];
let size = prompt("Enter size of the array: ");


console.log("Enter ",size," elements in array");
for(i=0; i<size; i++){
    arr[i] = prompt();
}

let max = arr[0];
for(i=0; i<size; i++) {
    if(arr[i] > max)
        max = arr[i];
}
console.log("largest number is: ",max);
