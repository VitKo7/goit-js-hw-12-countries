// * с дефолтным экспортом функции fetchCountries(searchQuery),
// возвращающей промис с массивом стран, результат запроса к API.

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return (
    fetch(url)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Error fetching data');
      })
      // .then(data => data.countries)
      .catch(err => {
        console.error('Error: ', err);
      })
  );
}

export default fetchCountries;
