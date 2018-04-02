import axios from 'axios';

const API_KEY ='9f46349830769dda1ef3323368c5c9b8';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER =  'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request); //Just to show an example of a PROMISE payload. Not needed for functionality

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
