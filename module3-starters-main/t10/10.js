document.querySelector('#source').addEventListener('submit', function(evt) {
    evt.preventDefault();
    let firstName = document.querySelector('input[name=firstname]').value;
    let lastName = document.querySelector('input[name=lastname]').value;
    document.querySelector('#target').innerHTML = `Your name is ${firstName} ${lastName}`;
})