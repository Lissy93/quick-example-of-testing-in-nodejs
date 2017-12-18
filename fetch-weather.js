/**
 * Created by alicia.sykes on 24/08/2015.
 */

var request = require('request');

function fetchWeather(location, callback) {

    var appId = 'aa0f1b0be45dca476178787f941c76dc'; // This is a managed key - I don't mind if you steal it ;)
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid='+appId;

    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(processResults(body));
        }
    });
}

function processResults(allResults){
    return {
        'minTemp'   : kelvinToCelcius(allResults.main.temp_min),    // Celsius
        'maxTemp'   : kelvinToCelcius(allResults.main.temp_max),    // Celsius
        'chanceRain': 0.83,                                         // 0 - 1 //TODO find new api
        'rainFall'  : getRainFall(allResults.rain),                 // mm
        'cloudCover': allResults.clouds.all                         // percentage
    }
}

function kelvinToCelcius(kTemp){
    return Math.round(kTemp - 273);
}

function getRainFall(rainObj){
    if (!rainObj) return 0;
    return (rainObj['1h'] || rainObj['2h'] || rainObj['3h'] || 0);
}

exports.fetchWeather = fetchWeather;