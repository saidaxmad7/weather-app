import { api } from "../lib/axios";

export const getWeather = async (city: string) => {
    const { data } = await api.get("/forecast.json", {
        params: {
            q: city,
            days: 7,
            aqi: "no",
            alerts: "no",
        },
    });

    return data
};
