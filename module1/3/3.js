let int1 = parseInt(prompt("Enter an integer: "));
let int2 = parseInt(prompt("Enter another integer: "));
let int3 = parseInt(prompt("Enter one more integer: "));

let sum = int1 + int2 + int3;
let product = int1 * int2 * int3;
let average = (int1 + int2 + int3) / 3;

document.querySelector('#sum').innerHTML = 'Sum of numbers: ' + sum.toString();
document.querySelector('#product').innerHTML = 'Product: ' + product.toString();
document.querySelector('#average').innerHTML = 'Average: ' + average.toString();
