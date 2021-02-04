import countryManyTpl from '../templates/country-many.hbs';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
};

function updateCountriesMarkup(countries) {
  const markup = countryManyTpl(countries);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
