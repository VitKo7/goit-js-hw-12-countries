// import from './css/style.css';
import fetchCountries from './js/fetchCountries.js';
import updateCountriesMarkup from './js/update-countries-markup.js';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchForm: document.querySelector('.js-search-form'),
};

// ! change to "input" + debounce
refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.countriesContainer.innerHTML = '';

  fetchCountries(inputValue).then(updateCountriesMarkup);
});
