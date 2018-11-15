// Write your code below
const bobsFollowers = ['Ashley', 'Tom', 'Billy', 'Marge'];
const tinasFollowers = ['Ashley', 'Marge', 'Jordan'];
const mutualFollowers = [];

for (let b = 0; b < bobsFollowers.length; b++) {
  for (let t = 0; t < tinasFollowers.length; t++) {
    if (bobsFollowers[b] === tinasFollowers[t]) {
      mutualFollowers.push(bobsFollowers[b]);
    }
  }
};


// I learned how to nest loops in loops and to be able to pull out any matching items from the 2 lists and add them to a third list
