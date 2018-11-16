const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}`)
  }
};
console.log(robot.provideInfo());

// I learned how the this keyword references the calling object and allows access to the objects properties
