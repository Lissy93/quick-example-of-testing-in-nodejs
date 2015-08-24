module.exports.weatherData = {
    cold_rainy: {
        'minTemp'   : 8,    // Celsius
        'maxTemp'   : 10,   // Celsius
        'windSpeed' : 42,   // km/ph
        'chanceRain': 0.83, // 0 - 1
        'rainFall'  : 26,   // mm
        'cloudCover': 72    // percentage
    },
    mild_windy: {
        'minTemp'   : 11,
        'maxTemp'   : 16,
        'windSpeed' : 112,
        'chanceRain': 0.31,
        'rainFall'  : 0.5,
        'cloudCover': 43
    },
    hot_sunny: {
        'minTemp'   : 26,
        'maxTemp'   : 31,
        'windSpeed' : 12,
        'chanceRain': 0,
        'rainFall'  : 0,
        'cloudCover': 0
    },
    cold_clear: {
        'minTemp'   : -8,
        'maxTemp'   : -2,
        'windSpeed' : 2,
        'chanceRain': 0,
        'rainFall'  : 0,
        'cloudCover': 0
    },
    warm_wet: {
        'minTemp'   : 18,
        'maxTemp'   : 25,
        'windSpeed' : 42,
        'chanceRain': 0.83,
        'rainFall'  : 16,
        'cloudCover': 72
    }
};