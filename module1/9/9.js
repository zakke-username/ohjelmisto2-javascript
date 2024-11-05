let n = parseInt(prompt('Enter an integer:'));

let prime = true;
if (n <= 1) {
    prime = false;
} else {
    for (let i = 2; i < Math.floor(n/2) + 1; i++) {
        if (n % i === 0) {
            prime = false;
        }
    }
}

let content = '';
if (prime) {
    content = `${n} is a prime number`;
} else {
    content = `${n} is not a prime number`;
}
document.querySelector('#prime-info').innerHTML = content;