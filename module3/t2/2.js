let target = document.querySelector('#target');

let first = document.createElement('li');
let second = document.createElement('li');
let third = document.createElement('li');

first.innerText = 'First item';
second.innerText = 'Second item';
third.innerText = 'Third item';

target.appendChild(first);
target.appendChild(second);
target.appendChild(third);

document.querySelectorAll('li')[1].classList.add('my-item');