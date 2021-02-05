import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error fetching data');
    })
    .catch(err => {
      console.error('Error: ', err);
      error({
        title: 'Sorry, ',
        text: 'No such a country found... Please, try one more time!',
      });
    });
}

export default fetchCountries;
