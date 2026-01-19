import { useWeather } from "../../hooks/useWeather";
import type { Units } from "../Layout/Layout";

interface Props {
    city: string;
    units: Units;
}

function WeatherStats({ city, units }: Props) {
    const { data, isLoading } = useWeather(city);

    if (isLoading || !data) {
        return <p className='text-white'>Loading...</p>;
    }

    const feelsLike =
        units.temp === "c"
            ? data.current.feelslike_c
            : (data.current.feelslike_c * 9) / 5 + 32;

    const wind =
        units.wind === "kmh"
            ? data.current.wind_kph
            : data.current.wind_kph / 1.609;

    const precip =
        units.precip === "mm"
            ? data.current.precip_mm
            : data.current.precip_mm / 25.4;

    return (
        <section className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-2'>
            <div className='weather-stats-card'>
                <p className='text-white text-base'>Feels Like</p>
                <p className='text-white text-2xl mt-6'>
                    {feelsLike.toFixed(1)}°{units.temp.toUpperCase()}
                </p>
            </div>

            <div className='weather-stats-card'>
                <p className='text-white text-base'>Humidity</p>
                <p className='text-white text-2xl mt-6'>
                    {data.current.humidity}%
                </p>
            </div>

            <div className='weather-stats-card'>
                <p className='text-white text-base'>Wind</p>
                <p className='text-white text-2xl mt-6'>
                    {wind.toFixed(1)} {units.wind}
                </p>
            </div>

            <div className='weather-stats-card'>
                <p className='text-white text-base'>Precipitation</p>
                <p className='text-white text-2xl mt-6'>
                    {precip.toFixed(1)} {units.precip}
                </p>
            </div>
        </section>
    );
}

export default WeatherStats;
