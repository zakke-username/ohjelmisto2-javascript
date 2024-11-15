async function logShowData(evt) {
    evt.preventDefault();
    let query = document.querySelector('input[name=q]').value;
    let response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    let jsonData = await response.json();
    console.log(`Name: ${jsonData[0].show.name}`);
    console.log(`Description: ${jsonData[0].show.summary}`);
    console.log(`Type: ${jsonData[0].show.type}`);
    console.log(`Language: ${jsonData[0].show.language}`);
}

document.querySelector('#search-form').addEventListener('submit', logShowData);
