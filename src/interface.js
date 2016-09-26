var thermostat = new Thermostat();


newThermostat = function(){
  thermostat = new Thermostat();
};

tempText = function(){
  $('#temperature').text(thermostat.getCurrentTemperature());
};


tempUp = function(){
  $('#temperature-up').click(function(){
    thermostat.upButton();
    tempText();
  });
};

tempDown = function(){
  $('#temperature-down').click(function(){
    thermostat.downButton();
    tempText();
  });
};

reset = function(){
    $('#temperature-reset').click(function(){
      newThermostat();
      tempText();
    });
};

tempText();
tempUp();
tempDown();
reset();
