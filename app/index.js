import 'whatwg-fetch';

// import fillInResult from './fill-in-result';

const searchInput = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-button');
const searchResults = document.querySelector('.title');


fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
.then((res) => {
  return res.json();
}).then((data) => {
  fillInResult(searchResults, data);
});


// searchForTitle('House of Cards');
