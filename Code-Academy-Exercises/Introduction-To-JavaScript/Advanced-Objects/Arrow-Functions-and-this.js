const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// I learned that arrow functions inherently bind an already defined this value to the function itself that is not the calling object and so it is best to avoid arrow functions when using a this method.
