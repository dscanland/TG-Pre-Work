const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      return 'Pass in a number that is greater than or equal to 0'
    }
  },
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },

};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);

// I learned how to use the setter method to reassign values of existing properites in the object and the advantages of using the setter method for reassinging properties
