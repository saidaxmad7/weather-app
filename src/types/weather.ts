export interface CurrentWeather {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    precip_mm: number;
    condition: {
        text: string;
        icon: string;
    };
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface ForecastHour {
    time: string;
    temp_c: number;
    is_day: number;
    condition: Condition;
}

export interface Location {
    name: string;
    country: string;
    localtime: string;
}

export interface ForecastDay {
    date: string;
    day: {
        maxtemp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    hour: ForecastHour[];
}

export interface WeatherData {
    location: {
        name: string;
        country: string;
        localtime: string;
    };
    current: CurrentWeather;
    forecast: {
        forecastday: ForecastDay[];
    };
}
