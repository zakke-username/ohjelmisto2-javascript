let numbers = [];

while (true) {
    let n = parseInt(prompt('Enter a number:'));
    if (n === 0) {
        break;
    }
    numbers.push(n);
}

numbers.sort(function(a,b){return b-a});

for (let n of numbers) {
    console.log(n);
}