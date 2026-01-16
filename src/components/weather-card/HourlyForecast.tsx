import { useWeather } from "../../hooks/useWeather";

function DailyForecast({ city }: { city: string }) {
    const { data, isLoading } = useWeather(city);

    if (isLoading || !data) return <p>Loading...</p>;

    return (
        <section className='gap-2 mt-10 pb-14'>
            <h1 className='text-lg text-white mb-3'>Daily forecast</h1>

            <div className='flex gap-2'>
                {data.forecast.forecastday.map((day) => {
                    const dayName = new Date(day.date).toLocaleDateString(
                        "en-US",
                        {
                            weekday: "short",
                        }
                    );

                    return (
                        <div
                            key={day.date}
                            className='daily-forecast-card p-3 w-[14%]'
                        >
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
                                    {day.day.maxtemp_c}°
                                </p>
                                <p className='text-white'>
                                    {day.hour[20]?.temp_c}°
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
