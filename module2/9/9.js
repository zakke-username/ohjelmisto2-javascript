function even(arr) {
    let output = [];
    for (let item of arr) {
        if (item % 2 === 0) {
            output.push(item);
        }
    }
    return output;
}

let exampleArray = [1,2,3,4,5,6];
console.log(exampleArray);
console.log(even(exampleArray));