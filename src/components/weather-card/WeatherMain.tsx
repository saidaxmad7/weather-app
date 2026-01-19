import { useWeather } from "../../hooks/useWeather";
import type { Units } from "../Layout/Layout";

interface Props {
  city: string;
  units: Units;
}

function WeatherMain({ city, units }: Props) {
  const { data, isLoading } = useWeather(city);

  if (isLoading || !data) return <p className="text-white">Loading...</p>;

  const date = new Date(data.location.localtime);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const temp =
    units.temp === "c"
      ? data.current.temp_c
      : (data.current.temp_c * 9) / 5 + 32;

  return (
    <section>
      <div className="container">
        <div className="weather-card md:flex md:justify-between md:items-center">
          <div className="weather-main-texts">
            <h4 className="weather-main-title text-white text-2xl font-semibold">
              {data.location.name}, {data.location.country}
            </h4>

            <p className="weather-main-subtitle text-white/70">
              {formattedDate}
            </p>
          </div>

          <div className="weather-main-info flex items-center gap-8">
            <div className="w-30 h-30">
              <img
                className="w-full h-full"
                src={data.current.condition.icon}
                alt={data.current.condition.text}
              />
            </div>

            <h2 className="text-6xl text-white">
              {Math.round(temp)}°{units.temp.toUpperCase()}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherMain;
