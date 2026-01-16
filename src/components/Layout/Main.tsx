import Search from "../search/Search";
import WeatherLayout from "../weather-card/WeatherLayout";
import type { Units } from "./Layout";

interface Props {
    city: string;
    units: Units;
    onSearch: (city: string) => void;
}

function Main({ city, units, onSearch }: Props) {
    return (
        <main>
            <Search onSearch={onSearch} />
            <WeatherLayout city={city} units={units} />
        </main>
    );
}

export default Main;
