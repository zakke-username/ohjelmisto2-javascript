async function getJoke() {
    let response = await fetch('https://api.chucknorris.io/jokes/random');
    let jsondata = await response.json();
    console.log(jsondata.value);
}

getJoke();