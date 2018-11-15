const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}


// I learned that the while loop works best when you don't know how many times the loop will run, and the while loop will run as long as the outcomes are true.
