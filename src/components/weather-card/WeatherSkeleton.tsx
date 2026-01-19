function WeatherSkeleton() {
    return (
        <>
            {/* LEFT COLUMN */}
            <div className='animate-pulse'>
                {/* Main card */}
                <div className='weather-card mb-6 flex items-center justify-center'>
                    <span className='text-white/40'>Loading...</span>
                </div>

                {/* Stats */}
                <div className='flex gap-2 mb-6'>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className='weather-stats-card' />
                    ))}
                </div>

                {/* Hourly */}
                <div className='hourly-forecast'>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className='hourly-forecast-card mb-2' />
                    ))}
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className='animate-pulse'>
                <div className='hourly-forecast'>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className='hourly-forecast-card mb-2' />
                    ))}
                </div>
            </div>
        </>
    );
}

export default WeatherSkeleton;
