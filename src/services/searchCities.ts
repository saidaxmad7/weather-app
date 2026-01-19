import { api } from "../lib/axios";

export interface CityResult {
  id: number;
  name: string;
  region: string;
  country: string;
}

export const searchCities = async (query: string) => {
  if (query.length < 2) return [];

  const { data } = await api.get<CityResult[]>("/search.json", {
    params: { q: query },
  });

  return data;
};
