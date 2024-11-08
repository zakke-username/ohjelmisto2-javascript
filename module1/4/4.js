let name = prompt('What is your name?');
let houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin'];
let house = houses[Math.floor(Math.random() * houses.length)];
document.querySelector('#house').innerHTML = `${name}, you are ${house}`;