import 'whatwg-fetch';

import fillInResult from './fill-in-result';
// import searchForTitle from './search-for-title';

const searchInput = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-button');
const searchResults = document.querySelector('.title');

fetch(`http://netflixroulette.net/api/api.php?title=Attack%20on%20titan`)
.then(res => res.json()).then((data) => {
  fillInResult(searchResults, data);
});

searchButton.addEventListener('click', () => {
  fetch(`http://netflixroulette.net/api/api.php?title=${searchInput.value}`)
  .then(res => res.json()).then((data) => {
    fillInResult(searchResults, data);
  });
});
