import { useWeather } from "../../hooks/useWeather";
import type { Units } from "../Layout/Layout";

interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        condition: {
            icon: string;
            text: string;
        };
    };
    hour: {
        temp_c: number;
    }[];
}

function DailyForecast({ city, units }: { city: string; units: Units }) {
    const { data, isLoading } = useWeather(city);

    if (isLoading || !data) return <p>Loading...</p>;

    return (
        <section className='mt-10 pb-14'>
            <h1 className='text-lg text-white mb-3'>Daily forecast</h1>

            <div className='grid grid-cols-3 md:grid-cols-7 gap-2'>
                {data.forecast.forecastday.map((day: ForecastDay) => {
                    const dayName = new Date(day.date).toLocaleDateString(
                        "en-US",
                        {
                            weekday: "short",
                        },
                    );

                    const maxTemp =
                        units.temp === "c"
                            ? day.day.maxtemp_c
                            : (day.day.maxtemp_c * 9) / 5 + 32;

                    const nightTemp =
                        units.temp === "c"
                            ? day.hour[20]?.temp_c
                            : (day.hour[20]?.temp_c * 9) / 5 + 32;

                    return (
                        <div key={day.date} className='daily-forecast-card p-3'>
                            <p className='text-white text-center'>{dayName}</p>

                            <div className='w-full flex justify-center mt-2'>
                                <img
                                    className='w-10 h-10'
                                    src={day.day.condition.icon}
                                    alt={day.day.condition.text}
                                />
                            </div>

                            <div className='flex items-center justify-between mt-2'>
                                <p className='text-white'>
                                    {maxTemp.toFixed(0)}°
                                </p>
                                <p className='text-white'>
                                    {nightTemp?.toFixed(0)}°
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default DailyForecast;
