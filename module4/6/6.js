async function getJokes(evt) {
    evt.preventDefault();
    
    let query = document.querySelector('input[name=q]').value;
    let response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    let jsondata = await response.json();

    let jokes = document.querySelector('#jokes');
    jokes.innerHTML = '';
    
    for (let item of jsondata.result) {
        let jokeArticle = document.createElement('article');
        jokeArticle.innerHTML = `<p>${item.value}</p>`;
        jokes.appendChild(jokeArticle);
    }
}

document.querySelector('#search').addEventListener('submit', getJokes);