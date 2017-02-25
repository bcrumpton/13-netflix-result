export default function fillInResult(el, data) {
  const titleName = document.querySelector('.title-info__name');
  titleName.innerText = data.show_title;

  const titleGenre = document.querySelector('.title-info__genre');
  titleGenre.innerText = data.category;

  const titleRating = document.querySelector('.title-info__rating');
  titleRating.innerHTML = `
  <h4 class="title-info__rating--number">${data.rating}</h4>
  <i class="fa fa-star" aria-hidden="true"></i>`;

  const titleImg = document.querySelector('.title-img');
  titleImg.src = data.poster;

  const titleSummary = document.querySelector('.title-summary__content');
  titleSummary.innerText = data.summary;

  const titleCast = document.querySelector('.title-actors__content');
  titleCast.innerText = data.show_cast;

  return el;
}
