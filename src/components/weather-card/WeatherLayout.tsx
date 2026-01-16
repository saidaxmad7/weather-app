import { useWeather } from "../../hooks/useWeather";
import type { Units } from "../Layout/Layout";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import WeatherMain from "./WeatherMain";
import WeatherStats from "./WeatherStats";

export interface Props {
    city: string;
    units: Units;
}

function WeatherLayout({ city, units }: Props) {
    const { isError } = useWeather(city);
    if (isError) {
        return (
            <p className='text-center text-red-400 text-3xl mt-10'>
                City not found. Try another name.
            </p>
        );
    }
    return (
        <div className='container'>
            <div className='grid grid-cols-[1fr_420px] gap-6 mt-12'>
                <div>
                    <WeatherMain city={city} />
                    <WeatherStats city={city} units={units} />
                    <HourlyForecast city={city} />
                </div>

                <DailyForecast city={city} />
            </div>
        </div>
    );
}

export default WeatherLayout;
