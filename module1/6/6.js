let out = '';

if (confirm('Should I calculate a square root?')) {
    let n = prompt('Enter a number:')
    if (n > 0) {
        out = `The square root of ${n} is ${Math.sqrt(n)}.`;
    } else {
        out = 'Cannot calculate the square root of a negative number.';
    }
} else {
    out = 'The square root is not calculated.';
}

document.querySelector('#sqrt-output').innerHTML = out;