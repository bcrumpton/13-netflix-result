export default function searchForTitle(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
  .then(res => res.json()).then((data) => {
    fillInResult(searchResults, data);
  });
}
