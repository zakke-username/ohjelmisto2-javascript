let numbers = [];
while (true) {
    let n = parseInt(prompt('Enter an integer:'));
    if (numbers.includes(n)) {
        console.log('This number has already been entered');
        numbers.sort(function(a,b){return a-b});
        for (let num of numbers) {
            console.log(num);
        }
        break;
    }
    numbers.push(n);
}