let dogs = [];
for (let i = 0; i < 6; i++) {
    dogs.push(prompt('Enter the name of a dog:'));
}

dogs.sort();
dogs.reverse();

for (let dog of dogs) {
    document.querySelector('#dogs-list').innerHTML += `<li>${dog}</li>`;
}