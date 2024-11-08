function rollDice(sides) {
    return Math.floor(Math.random() * sides + 1);
}

let numSides = parseInt(prompt('Enter the number of sides in your dice:'));
let results = [];
while (true) {
    let roll = rollDice(numSides)
    document.querySelector('#dice-results').innerHTML += `<li>${roll}</li>`;
    if (roll === numSides) {
        break;
    }
}
