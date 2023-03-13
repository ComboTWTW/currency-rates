var myHeaders = new Headers();
myHeaders.append("apikey", "MFanPAxcMo4X34mhAR3V2iGdXgEi0Q7P");

var requestOptions:RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


export const apiConvert = (to:string, from:string, amount:string):any => {
  const link = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`;

  return fetch(link, requestOptions)
    .then(response => response.json())
    .then((data) => data)
}

export const apiDate = (to:string, from:string, date:any):any => {
  const link = `https://api.apilayer.com/fixer/${date}?symbols=${to}&base=${from}`;

  fetch(link, requestOptions)
  .then(response => response.json())
  .then((data) => data)
}



