async function displayData(evt) {
    evt.preventDefault();
    
    let query = document.querySelector('input[name=q]').value;
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    let jsonData = await response.json();

    let results = document.querySelector('#results');
    results.innerHTML = '';
    
    for (let i = 0; i < jsonData.length; i++) {
        let article = document.createElement('article');

        let title = document.createElement('h2');
        title.innerHTML = jsonData[i].show.name;

        let link = document.createElement('a');
        link.innerHTML = jsonData[i].show.url;
        link.href = jsonData[i].show.url;
        link.target = '_blank';

        let image = document.createElement('img');
        image.src = jsonData[i].show.image?.medium;
        image.alt = '';

        let description = document.createElement('div');
        description.innerHTML = jsonData[i].show.summary;

        article.appendChild(title);
        article.appendChild(link);
        article.appendChild(image);
        article.appendChild(description);

        results.appendChild(article);
    }
}

document.querySelector('#search-form').addEventListener('submit', displayData);
