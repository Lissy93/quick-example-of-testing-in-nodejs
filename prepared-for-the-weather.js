/**
 * Created by alicia.sykes on 24/08/2015.
 */

/**
 * Sample weather object:
 *   var todaysWeather = {
 *       'minTemp'   : 18,   // Celsius
 *       'maxTemp'   : 25,   // Celsius
 *       'windSpeed' : 42,   // km/ph
 *       'chanceRain': 0.83, // 0 - 1
 *       'rainFall'  : 16,   // mm
 *       'cloudCover': 72    // percentage
 *   };
 */

/**
 * Calculates a (not very accurate) average from the min and max temperature
 * @param min
 * @param max
 * @returns {*}
 */
function averagteTemp(min, max){
    return min + max / 2;
}

module.exports.doINeed = {

    /**
     * Do I need an umbrella today? Return true if:
     * Chance of rain is MORE than 50% OR rainfall is MORE than 5mm
     * @param weather
     * @returns {boolean}
     */
    umbrella: function(weather){
      return !!(weather.chanceRain > 50 || weather.rainFall > 3);
    },
    /**
     * Do I need suncream today? Return true  if:
     * Cloud cover is LESS than 50% AND average temp is MORE than 21 deg C
     * @param weather
     * @returns {boolean}
     */
    suncream  : function(weather){
      var averageTemp = averagteTemp(weather.minTemp, weather.maxTemp);
      return !!(weather.cloudCover < 50 && averageTemp > 21);

    },
    /**
     * Do I need a jumper today? Return true if:
     * Minimum temperature is LESS than 12 degrees C
     * @param weather
     * @returns {boolean}
     */
    jumper   : function(weather){
        return weather.minTemp < 12;

    },
    /**
     * Do I need water today? Returns true: ALWAYS, because you always need water
     * @param weather
     * @returns {boolean}
     */
    water    : function(weather){
        return true;
    }

};
