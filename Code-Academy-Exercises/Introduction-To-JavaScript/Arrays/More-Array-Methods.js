const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// I learned how to use the .shift(), .unshift(), .slice(), and the .indexOf() methods to manipulate the array in various ways. thre are slos many other thigs to do to arrays and a nice resource to find them 
