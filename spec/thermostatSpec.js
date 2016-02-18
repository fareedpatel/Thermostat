'use strict';

describe('Thermostat', function(){

	var thermostat;
	
	beforeEach(function(){
		thermostat = new Thermostat();
	});
	
	it('starts at 20 degrees', function(){
		expect(thermostat.getCurrentTemperature()).toEqual(20);
	});

	it('allows increase of temperature using up button', function(){
		thermostat.upButton();
		expect(thermostat.getCurrentTemperature()).toEqual(21);
	});
	
	it('allows decrease of temperature using down button', function(){
		thermostat.downButton();
		expect(thermostat.getCurrentTemperature()).toEqual(19);
	});

	it('allows us to set a minimum temperature 10º', function() {
		expect(thermostat.MINIMUM_TEMP).toEqual(10);
	});

	it('it will not reduce temperature under 10º', function() {
		for (var i=0; i<11; i++) {
			thermostat.downButton();};
			expect(thermostat.getCurrentTemperature()).toEqual(10);	
	});

	it('has power saving mode on by default', function(){
		expect(thermostat.isPowerSavingModeOn()).toBe(true);
	});

	it('has power saving mode switch off', function(){
		thermostat.switchPowerSavingModeOff();
		expect(thermostat.isPowerSavingModeOn()).toBe(false);
	});


	it('can switch PSM back on', function() {
		thermostat.switchPowerSavingModeOff();
		expect(thermostat.isPowerSavingModeOn()).toBe(false);
		thermostat.switchPowerSavingModeOn();
		expect(thermostat.isPowerSavingModeOn()).toBe(true);
	});


	describe('when power saving mode is on', function() {
	it('gives a maxi temp of 25º if power saving mode is on', function(){
		for (var i=0; i<6; i++){
		thermostat.upButton();}
		expect(thermostat.getCurrentTemperature()).toEqual(25);
		});
	});
	

describe('when power saving mode is off', function() {
	it('gives a maxi temp of 32º if power saving mode is off', function(){
		thermostat.switchPowerSavingModeOff
		for (var i=0; i<13; i++){
		thermostat.upButton();}
		expect(thermostat.getCurrentTemperature()).toEqual(32);
		});
	});
});

	


