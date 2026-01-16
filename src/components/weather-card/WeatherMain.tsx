import { useWeather } from "../../hooks/useWeather";

function WeatherMain({ city }: { city: string }) {
  const { data, isLoading } = useWeather(city);

  if (isLoading || !data)
    return <p className="text-white">Loading...</p>;

  const date = new Date(data.location.localtime);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section>
      <div className="container">
        <div className="weather-card flex justify-between items-center">
          <div className="weather-main-texts">
            <h4 className="weather-main-title text-white text-2xl font-semibold">
              {data.location.name}, {data.location.country}
            </h4>

            <p className="weather-main-subtitle text-white/70">
              {formattedDate}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="w-30 h-30">
              <img
                className="w-full h-full"
                src={data.current.condition?.icon}
                alt={data.current.condition?.text}
              />
            </div>

            <h2 className="text-6xl text-white">
              {Math.round(data.current.temp_c)}°
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherMain;
