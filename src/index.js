import fetchCountries from './js/fetchCountries.js';
import oneCountryMarkup from './js/one-country-markup.js';
import updateCountriesMarkup from './js/update-countries-markup.js';
// import notify from './js/notifications.js';
import './css/style.css';

import {
  // alert, notice, info, success, defaultModules,
  error,
} from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
  searchForm: document.querySelector('.js-search-form'),
};

function render() {
  let inputValue = refs.searchForm.elements.query.value;
  refs.countriesContainer.innerHTML = '';
  // refs.searchForm.reset();

  fetchCountries(inputValue).then(data => console.log(data));

  fetchCountries(inputValue).then(count);

  function count(countries) {
    let searchRes = countries.length;
    console.log(searchRes);

    if (searchRes > 10) {
      const myError = error({
        title: 'Sorry!',
        text: 'You need to make the request more specific.',
      });
    } else if (searchRes > 1) {
      fetchCountries(inputValue).then(updateCountriesMarkup);
    } else if (searchRes === 1) {
      fetchCountries(inputValue).then(oneCountryMarkup);
    } else {
      const myError = error({
        title: 'Sorry,',
        text: 'No such a country found. Please, try one more time!',
      });
    }
  }
  // refs.searchForm.value = '';
  // console.log('marker', refs.searchForm);
}

refs.searchForm.addEventListener('input', _.debounce(render, 500));
