'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');

let john = document.createElement('option');
john.innerText = students[0]['name'];
john.value = students[0]['id'];

let paul = document.createElement('option');
paul.innerText = students[1]['name'];
paul.value = students[1]['id'];

let jones = document.createElement('option');
jones.innerText = students[2]['name'];
jones.value = students[2]['id'];

target.appendChild(john);
target.appendChild(paul);
target.appendChild(jones);