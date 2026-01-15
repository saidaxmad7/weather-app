
function WeatherMain() {
    return (
        <section>
            <div className='container'>
                <div className="weather-card flex justify-between items-center">
                    <div className="weather-main-texts">
                        <h4 className="weather-main-title text-white text-2xl font-semibold">Berlin, Germany</h4>
                        <p className="weather-main-subtitle">Tuesday, Aug 5, 2025</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="w-30 h-30">
                            <img className="w-full h-full" src="/icon-partly-cloudy.webp" alt="partly-cloudly" />
                        </div>
                        <h2 className="text-6xl text-white">20</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeatherMain;
