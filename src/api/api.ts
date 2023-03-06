var myHeaders = new Headers();
myHeaders.append("apikey", "MFanPAxcMo4X34mhAR3V2iGdXgEi0Q7P");

var requestOptions:RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const apiConvert = (link:string) => {
  fetch(link, requestOptions)
    .then(response => response.json())
    .then((data) => console.log("result is " + data.result))
    .catch(error => console.log('error', error)); 
}



/* export const apiDate = (date, symbols, base) => {


} */

