let n = parseInt(prompt('Enter the number of participants:'));
let names = [];
for (let i = 0; i < n; i++) {
    let name = prompt(`Enter the name of participant #${i+1}`);
    names.push(name);
}

names.sort()
for (let name of names) {
    document.querySelector('#names-list').innerHTML += `<li>${name}</li>`;
}