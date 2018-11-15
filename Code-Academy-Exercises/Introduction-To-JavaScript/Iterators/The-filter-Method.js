const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => {
  return randomNumber < 250;
})
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
})
console.log(longFavoriteWords);

// I learned how to use the .filter method to create a whole new array based off filtering items from the original array
