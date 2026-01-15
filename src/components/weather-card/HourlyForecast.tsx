import { ConfigProvider } from "antd";
import HourlyBtn from "../btns/HourlyBtn";

function HourlyForecast() {
    return (
        <section className='p-4 hourly-forecast'>
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
                    <HourlyBtn />
                </ConfigProvider>
            </div>

            <nav className='gap-y-2 mt-3'>
                <div className='hourly-forecast-card flex justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <img
                            className='w-8 h-8'
                            src='/icon-storm.webp'
                            alt='storm'
                        />
                        <p className='text-white'>3 PM</p>
                    </div>
                    <p className='text-white'>20</p>
                </div>
            </nav>
        </section>
    );
}

export default HourlyForecast;
