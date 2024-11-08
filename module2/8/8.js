function concatenate(arr) {
    let output = '';
    for (let item of arr) {
        output += item;
    }
    return output;
}

let exampleArray = ['Einari', 'Viljami', 'Spede', 'Joni'];
document.querySelector('#concat-string').innerHTML = concatenate(exampleArray);