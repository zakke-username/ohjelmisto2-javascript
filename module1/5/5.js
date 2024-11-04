let year = prompt('Enter a year:');

let isLeap = false;

if (year % 4 === 0) {
    if (year % 100 !== 0) {
        isLeap = true;
    } else if (year % 400 === 0) {
        isLeap = true;
    }
}

let output = '';
if (isLeap) {
    output = `The year ${year} is a leap year`;
} else {
    output = `The year ${year} is not a leap year`;
}

document.querySelector('#leap-year-info').innerHTML = output;