/**
 * Created by alicia.sykes on 24/08/2015.
 */

/* Include testing tools */
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

/* Include module(s) to test */
var fetchWeather = require('../fetch-weather');

/* Include sample data */
var rawWeatherData = require('../test-data/sample-weather-raw.json');

describe('Test that the data fetched from OpenWeatherMap is processed correctly', function(){

    it('Should check fetched data is processed correctly', function(){
        var callback = sinon.stub();
        callback.withArgs("London").returns(rawWeatherData);
        //TODO
    });

});


