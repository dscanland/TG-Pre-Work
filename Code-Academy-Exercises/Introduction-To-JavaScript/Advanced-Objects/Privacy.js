const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';

console.log(robot.recharge())



// I learned that the _ is used to denote a property that should not be changed by programmers and that these properties are still mutatable
