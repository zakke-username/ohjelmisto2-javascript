'use strict';
const names = ['John', 'Paul', 'Jones'];

let target = document.querySelector('#target');

for (let name of names) {
    target.innerHTML += `<li>${name}</li>`;
}