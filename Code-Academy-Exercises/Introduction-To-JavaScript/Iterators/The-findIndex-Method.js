const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})

const startsWithS = animals.findIndex(ani => {
  return ani[0] === 's';

})

console.log(animals[3]);


// I learned how to use the .findIndex to locate specific qualities of an item in an array
