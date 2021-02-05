import fetchCountries from './js/fetchCountries.js';
import oneCountryMarkup from './js/one-country-markup.js';
import updateCountriesMarkup from './js/update-countries-markup.js';

import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import refs from './utils/refs.js';
import './css/style.css';

function render() {
  let inputValue = refs.searchForm.elements.query.value;
  refs.countriesContainer.innerHTML = '';

  fetchCountries(inputValue).then(count);

  function count(countries) {
    // console.log(countries);
    let searchRes = countries.length;
    // console.log(searchRes);

    countries ? '' : alert('ok');

    if (searchRes > 10) {
      error({
        title: 'Sorry,',
        text: 'PLease, make your request more specific!',
      });
    } else if (searchRes > 1) {
      fetchCountries(inputValue).then(updateCountriesMarkup);
    } else if (searchRes === 1) {
      fetchCountries(inputValue).then(oneCountryMarkup);
    }
  }
  // refs.searchForm.value = '';
  // console.log('marker', refs.searchForm);
}

refs.searchForm.addEventListener('input', _.debounce(render, 500));
