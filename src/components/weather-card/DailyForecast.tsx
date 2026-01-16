import { useState } from "react";
import { ConfigProvider } from "antd";
import { useWeather } from "../../hooks/useWeather";
import HourlyBtn from "../btns/HourlyBtn";
import { getWeatherIcon } from "../../utils/getWeatherIcon";

function HourlyForecast({ city }: { city: string }) {
    const { data, isLoading } = useWeather(city);
    const [dayIndex, setDayIndex] = useState(0);

    if (isLoading || !data) return <p className='text-white'>Loading...</p>;

    const now = new Date(data.location.localtime);
    const currentHour = now.getHours();

    const hours = data.forecast.forecastday[dayIndex].hour
        .filter((hour) => {
            const hourTime = new Date(hour.time).getHours();
            return hourTime >= currentHour;
        })
        .slice(0, 8);

    return (
        <section className='p-4 hourly-forecast h-[92%]'>
            <div className='flex justify-between items-center'>
                <p className='text-white text-xl'>Hourly forecast</p>

                <ConfigProvider
                    theme={{
                        components: {
                            Dropdown: {
                                colorBgElevated: "var(--neutral-700)",
                            },
                        },
                    }}
                >
                    <HourlyBtn
                        days={data.forecast.forecastday}
                        activeDay={dayIndex}
                        onChange={setDayIndex}
                    />
                </ConfigProvider>
            </div>

            <nav className='gap-y-2 mt-3'>
                {hours.map((hour) => {
                    const time = new Date(hour.time).toLocaleTimeString(
                        "en-US",
                        {
                            hour: "numeric",
                            hour12: true,
                        }
                    );

                    return (
                        <div
                            key={hour.time}
                            className='hourly-forecast-card mt-3 flex justify-between items-center'
                        >
                            <div className='flex items-center gap-1'>
                                <img
                                    className='w-8 h-8'
                                    src={getWeatherIcon(
                                        hour.condition,
                                        hour.is_day
                                    )}
                                    alt={hour.condition.text}
                                />
                                <p className='text-white'>{time}</p>
                            </div>
                            <p className='text-white'>{hour.temp_c}°</p>
                        </div>
                    );
                })}
            </nav>
        </section>
    );
}

export default HourlyForecast;
