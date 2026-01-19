import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/weather";

export const useWeather = (city: string) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
    enabled: !!city && city.length >= 3, 
    retry: false,
  });
};

