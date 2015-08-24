
/* Include testing tools */
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

/* Include module(s) to test */
var helloWeather = require('../prepared-for-the-weather');

/* Fetch some sample test-data, and populate sample attributes */
var sampleData = require('../test-data/sample-data').weatherData;
var monday      = sampleData.cold_rainy;
var tuesday     = sampleData.mild_windy;
var wednesday   = sampleData.hot_sunny;
var thuresday   = sampleData.cold_clear;
var friday      = sampleData.warm_wet;


describe('Test the weather kit module\'s basic functionality', function(){

    /* Example of Chai expect*/
    it('should return true for umbrella test if it is raining',function(){
        expect(helloWeather.doINeed.umbrella(monday)).to.be.a('boolean');
        expect(helloWeather.doINeed.umbrella(tuesday)).equal(false);
        expect(helloWeather.doINeed.umbrella(wednesday)).equal(false);
        expect(helloWeather.doINeed.umbrella(friday)).equal(true);
    });

    /* Example of Chai should */
    it('should return true if suncream is required', function(){
        helloWeather.doINeed.suncream(monday).should.be.a('boolean');
        helloWeather.doINeed.suncream(monday).should.equal(false);
        helloWeather.doINeed.suncream(tuesday).should.equal(false);
        helloWeather.doINeed.suncream(wednesday).should.equal(true);
    });

    /* Example of Chai assert */
    it('should return true if jumper is required', function(){
        assert.typeOf(helloWeather.doINeed.jumper(monday), 'boolean');
        assert.typeOf(helloWeather.doINeed.jumper(tuesday), 'boolean', 'boolean returned');
        assert.equal(
            helloWeather.doINeed.jumper(wednesday),
            false,
            'should return false, because it is very warm on wednesday'
        );
        assert.equal(helloWeather.doINeed.jumper(thuresday), true)
    });

    it('should always return true as water is always required', function(){
       expect(helloWeather.doINeed.water(monday)).equal(true);
    });

});


