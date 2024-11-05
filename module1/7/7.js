let dice = parseInt(prompt("How many dice should we roll?"));
let sum = 0;

for (let i = 0; i < dice; i++) {
    sum += Math.floor(Math.random() * 6 + 1);
}

console.log(sum);