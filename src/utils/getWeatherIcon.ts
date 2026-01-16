import type { Condition } from "../types/weather";

export const getWeatherIcon = (condition: Condition, isDay: number): string => {
    switch (condition.code) {
        case 1000:
            return isDay ? "/icon-sunny.webp" : "/icon-overcast.webp";

        case 1003:
            return "/icon-partly-cloudy.webp";

        case 1006:
        case 1009:
            return "/icon-overcast.webp";

        case 1030:
        case 1135:
        case 1147:
            return "/icon-fog.webp";

        case 1063:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
            return "/icon-rain.webp";

        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
            return "/icon-snow.webp";

        case 1273:
        case 1276:
        case 1279:
        case 1282:
            return "/icon-storm.webp";

        default:
            return "/icon-overcast.webp";
    }
};
