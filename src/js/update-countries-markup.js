import countryTpl from '../templates/country.hbs';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
};

function updateCountriesMarkup(countries) {
  const markup = countryTpl(countries);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
