import axios from "axios";

const API_KEY = "4e5fd62cd37aef2d0ba28b61c6c0b8ec";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?";
const last = "APPID=" + API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = city => {
  return async function(dispatch, getState) {
    const url = `${ROOT_URL}q=${city},us&${last}`;
    const response = await axios.get(url);
    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};
