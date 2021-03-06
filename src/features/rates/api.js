const fetchRates = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://www.cbr-xml-daily.ru/daily_json.js`)
    .then((response) => response.json())
    .then(data => data.Valute)
    .then(({ USD, EUR }) => [USD.Value, EUR.Value]);
}

// добавил рандомчика
const fetchRatesUsdEur = () => {
  const randomize = (min, max) => Math.random() * (max - min) + min;
  return fetchRates()
    .then(([usd, eur]) => [usd + randomize(-2, 2), eur + randomize(-2, 2)]);
};

export {
  fetchRatesUsdEur,
}