function even(arr) {
    let output = [];
    for (let item of arr) {
        if (item % 2 === 0) {
            output.push(item);
        }
    }
    return output;
}

let exampleArray = [];
for (let i = 0; i < 8; i++) {
    exampleArray.push(Math.floor(Math.random() * 10));
}
let evenArray = even(exampleArray);
console.log(`Original array: ${exampleArray}`);
console.log(`Even numbers: ${evenArray}`);
