let numDice = parseInt(prompt('Enter the number of dice:'));
let targetSum = parseInt(prompt('Enter the target sum to calculate its probability:'));
let targetsReached = 0;
let testRolls = 1000000;

for (let i = 0; i < testRolls; i++) {
    let rollSum = 0;
    for (let j = 0; j < numDice; j++) {
        rollSum += Math.floor(Math.random() * 6 + 1);
    }
    if (rollSum === targetSum) {
        targetsReached++;
    }
}

let probability = ((targetsReached / testRolls) * 100).toFixed(2);
document.querySelector('#probability').innerHTML = `Probability to get sum ${targetSum} with ${numDice} dice is about ${probability}%`;