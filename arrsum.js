// const prompt = require("prompt-sync")();
// var sum=0;
// var len=(Number(prompt("Enter len of array")));
// var ar=new Array();

// for(var i=0;i<len;i++){
//   ar.push(Number(prompt("Enter array elements:")));
// }

// for(var i=0;i<len;i++){
//   sum+=ar[i];
// }

// console.log(sum+" ");


// user input 


const prompt = require("prompt-sync")();
const size = prompt("Enter the size of the array: ");
let arr = [];
console.log("Enter ", size, " elements in the array");
for (let i = 0; i < size; i++) {
  arr[i] = parseFloat(prompt(`Enter element ${i + 1}: `));
}
let sum = 0;
for (let i = 0; i < size; i++) {
  sum += arr[i];
}
console.log("The sum of the array is:", sum);

// compiletime input


// function sumArray(array) {
//     const arr = [1, 4, 0, 9, -3];
//     let sum = 0;
  
//     for (let i = 0; i < arr.length; i += 1) {
//       sum += arr[i];

//     }
    
//     return sum;
//   }
  
//   console.log(sumArray([1, 4, 0, 9, -3]));
