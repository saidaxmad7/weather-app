import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.weatherapi.com/v1",

    params: {
        key: import.meta.env.VITE_WEATHER_API_KEY,
    },
});

