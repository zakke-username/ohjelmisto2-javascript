document.querySelector('#start').addEventListener('click', function() {
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    
    let operation = document.querySelector('#operation').value;

    let result;
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'sub') {
        result = num1 - num2;
    } else if (operation === 'multi') {
        result = num1 * num2;
    } else if (operation === 'div') {
        result = num1 / num2;
    }
    
    document.querySelector('#result').innerHTML = `Result: ${result}`;
});