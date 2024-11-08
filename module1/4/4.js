let name = prompt('What is your name?');
let randomInt = Math.floor(Math.random() * 4);
let output = name + ', you are ';

if (randomInt === 0) {
  output += 'Gryffindor';
} else if (randomInt === 1) {
  output += 'Ravenclaw';
} else if (randomInt === 2) {
  output += 'Hufflepuff';
} else if (randomInt === 3) {
  output += 'Slytherin';
}

document.querySelector('#house').innerHTML = output;