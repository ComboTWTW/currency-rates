interface Options {
    methodstring: String;
    redirect: String;
    headers: any;
}

const myHeaders = new Headers();
myHeaders.append("apikey", "MFanPAxcMo4X34mhAR3V2iGdXgEi0Q7P");

const options:Options = {
    methodstring: 'GET',
    redirect: 'follow',
    headers: myHeaders,
};

export const apiCovert = (to, from, amount, date?) => {
const link = `https://api.apilayer.com/fixer/convert?to=RUB&from=USD&amount=1&${date}`;
fetch("https://api.apilayer.com/fixer/convert?to=RUB&from=USD&amount=1&${date?}", options)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export const apiFluctation = (startDate, endDate, symbols, base) => {


}

export const apiLatest = (symbols, base) => {


}

export const apiSymbols = () => {


}

export const apiTimeseries = (startDate, endDate, symbols, base) => {


}

export const apiDate = (date, symbols, base) => {


}

