import axios from "axios"

export const getCountries =  () => {
  const promise =  axios.get('https://countriesnow.space/api/v0.1/countries/capital');

  return promise.data;
};