document.querySelector('#start').addEventListener('click', function() {
    let calcInput = document.querySelector('#calculation').value;
    let result;

    if (calcInput.includes('+')) {
        let calcArr = calcInput.split('+');
        result = parseInt(calcArr[0]) + parseInt(calcArr[1]);
    } else if (calcInput.includes('-')) {
        let calcArr = calcInput.split('-');
        result = parseInt(calcArr[0]) - parseInt(calcArr[1]);
    } else if (calcInput.includes('*')) {
        let calcArr = calcInput.split('*');
        result = parseInt(calcArr[0]) * parseInt(calcArr[1]);
    } else if (calcInput.includes('/')) {
        let calcArr = calcInput.split('/');
        result = parseInt(calcArr[0]) / parseInt(calcArr[1]);
    }

    document.querySelector('#result').innerHTML = `Result: ${result}`;
});