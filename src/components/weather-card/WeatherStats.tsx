function WeatherStats() {
    return (
        <section className='flex  mt-5 gap-2'>
            <div className='weather-stats-card'>
                <p className="text-white text-[16px]">Feels Like</p>
                <p className="text-white text-2xl mt-7">18</p>
            </div>
            <div className='weather-stats-card'>
                <p className="text-white text-[16px]">Humality</p>
                <p className="text-white text-2xl mt-7">46%</p>
            </div>
            <div className='weather-stats-card'>
                <p className="text-white text-[16px]">Wind</p>
                <p className="text-white text-2xl mt-7">14km/h</p>
            </div>
            <div className='weather-stats-card'>
                <p className="text-white text-[16px]">Precipitation</p>
                <p className="text-white text-2xl mt-7">0 mm</p>
            </div>
        </section>
    );
}

export default WeatherStats;
