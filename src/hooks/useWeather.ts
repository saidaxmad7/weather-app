import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "../types/weather";
import { getWeather } from "../services/weather";

export const useWeather = (city: string) => {
    return useQuery<WeatherData>({
        queryKey: ["weather", city],
        queryFn: () => getWeather(city),
        enabled: city.length >= 3,
        retry: false,
    });
};
