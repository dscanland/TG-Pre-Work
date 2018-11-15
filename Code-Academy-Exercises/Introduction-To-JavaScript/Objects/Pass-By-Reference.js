let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = newobj => {
  newobj.disabled = true;
};

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)

// I learned that ojects are passed by reference and that functions can permanently change a property of the object
