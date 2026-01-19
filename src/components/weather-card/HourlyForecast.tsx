import { useState } from "react";
import { ConfigProvider } from "antd";
import { useWeather } from "../../hooks/useWeather";
import HourlyBtn from "../btns/HourlyBtn";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import type { Units } from "../Layout/Layout";

interface Hour {
    time: string;
    temp_c: number;
    is_day: number;
    condition: {
        text: string;
        icon: string;
        code: number;
    };
}

function HourlyForecast({ city, units }: { city: string; units: Units }) {
    const { data, isLoading } = useWeather(city);
    const [dayIndex, setDayIndex] = useState(0);

    if (isLoading || !data) return <p className='text-white'>Loading...</p>;

    const now = new Date(data.location.localtime);
    const currentHour = now.getHours();

    const hours = data.forecast.forecastday[dayIndex].hour
        .filter((hour: Hour) => {
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

            <nav className='mt-4 flex md:block gap-2 overflow-x-auto md:overflow-visible'>
                {hours.map((hour: Hour) => {
                    const time = new Date(hour.time).toLocaleTimeString(
                        "en-US",
                        {
                            hour: "numeric",
                            hour12: true,
                        },
                    );

                    const temp =
                        units.temp === "c"
                            ? hour.temp_c
                            : (hour.temp_c * 9) / 5 + 32;

                    return (
                        <div
                            key={hour.time}
                            className='hourly-forecast-card flex-shrink-0 md:flex md:justify-between items-center px-3 py-2 mt-3'
                        >
                            <div className='flex items-center gap-1'>
                                <img
                                    className='w-8 h-8'
                                    src={getWeatherIcon(
                                        hour.condition,
                                        hour.is_day,
                                    )}
                                    alt={hour.condition.text}
                                />
                                <p className='text-white'>{time}</p>
                            </div>
                            <p className='text-white'>{temp.toFixed(0)}°</p>
                        </div>
                    );
                })}
            </nav>
        </section>
    );
}

export default HourlyForecast;
