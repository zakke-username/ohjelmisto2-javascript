let startYear = parseInt(prompt('Enter the first year:'));
let endYear = parseInt(prompt('Enter the second year:'));

let leapYears = [];

for (let year = startYear; year <= endYear; year++) {
    let isLeap = false;
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            isLeap = true;
        } else if (year % 400 === 0) {
            isLeap = true;
        }
    }
    if (isLeap) {
        leapYears.push(year);
    }
}

let content = '';
for (let year of leapYears) {
    content += `<li>${year}</li>`;
}
document.querySelector('#year-list').innerHTML = content;