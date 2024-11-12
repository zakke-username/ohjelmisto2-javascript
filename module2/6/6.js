function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}

while (true) {
    let roll = rollDice()
    document.querySelector('#dice-results').innerHTML += `<li>${roll}</li>`;
    if (roll === 6) {
        break;
    }
}
