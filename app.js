/**
 * Created by alicia.sykes on 24/08/2015.
 */
require('colors');

var fetchWeather = require('./fetch-weather');
var prepareForWeather = require('./prepared-for-the-weather');

var commandLineArgs = require("command-line-args");

var cli = commandLineArgs([
    { name: "location", alias: "l", type: String, defaultValue: "London" }
]);
var location = cli.parse().location;

/* Fetch weather data */
fetchWeather.fetchWeather(location,
    function(today){

        /* Get list of kit needed to survive the weather */
        var weatherKit = [
            {'name' : 'Umbrella',   'value': prepareForWeather.doINeed.umbrella(today)},
            {'name' : 'Suncream',   'value': prepareForWeather.doINeed.suncream(today)},
            {'name' : 'Jumper',     'value': prepareForWeather.doINeed.jumper(today)},
            {'name' : 'Water',      'value': prepareForWeather.doINeed.water(today)},
        ];

        /* Iterate over each item and print to console */
        for(key in weatherKit){
            printLine(weatherKit[key].value, weatherKit[key].name);
        }
    }
);

/* Prints to console with nice colors and symbols */
function printLine(required, text){
    if(required){ console.log((String.fromCharCode(10004)+" "+text).green);}
    else{console.log((String.fromCharCode(10006)+" "+text).red);}
}