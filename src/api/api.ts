const myHeaders = new Headers();
myHeaders.append("apikey", "MFanPAxcMo4X34mhAR3V2iGdXgEi0Q7P");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const apiSymbols = () => {
  return fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}


/* export const apiCovert = (to, from, amount, date?) => {
const link = `https://api.apilayer.com/fixer/convert?to=RUB&from=USD&amount=1&${date}`;
fetch("https://api.apilayer.com/fixer/convert?to=RUB&from=USD&amount=1&${date?}", options)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
} */

/* export const apiDate = (date, symbols, base) => {


} */

