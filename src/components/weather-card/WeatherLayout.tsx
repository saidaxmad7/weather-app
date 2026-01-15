import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import WeatherMain from "./WeatherMain";
import WeatherStats from "./WeatherStats";

function WeatherLayout() {
    return (
        <div className='container'>
            <div className='grid grid-cols-[1fr_420px] gap-6 mt-12'>
                <div>
                    <WeatherMain />
                    <WeatherStats />
                    <DailyForecast />
                </div>

                <HourlyForecast />
            </div>
        </div>
    );
}

export default WeatherLayout;
