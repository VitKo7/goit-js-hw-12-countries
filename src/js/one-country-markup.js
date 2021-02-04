import countryTpl from '../templates/country.hbs';

const refs = {
  oneCountryContainer: document.querySelector('.country-info'),
};

function oneCountryMarkup(countries) {
  const markup = countryTpl(countries);
  refs.oneCountryContainer.insertAdjacentHTML('beforeend', markup);
}

export default oneCountryMarkup;
