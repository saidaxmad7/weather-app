function DailyForecast() {
    return (
        <section className='gap-2 mt-10 pb-14'>
            <h1 className='text-lg text-white mb-3'>Daily forecast</h1>
            <div className='flex'>
                <div className='daily-forecast-card p-3 w-[14%]'>
                    <p className='text-white text-center'>Tue</p>
                    <div className='w-full flex justify-center mt-2'>
                        <img
                            className='w-10 h-10'
                            src='/icon-storm.webp'
                            alt='storm'
                        />
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                        <p className='text-white'>20</p>
                        <p className='text-white'>14</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DailyForecast;
