function checkEven(num)
{
return num%2 === 0;
}
const numbers = [2, 4, 6, 7, 8];
let check = numbers.every(checkEven);
console.log(check)