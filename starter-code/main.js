//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

/* if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */

// var numOfCards = 4;
// var board = document.getElementById('game-board');
// // the function creates the cards for the board
// var createCards = function() {
// 	// create cards for board
// 	for (var i = 0; i < numOfCards; i++) {
// 		// create cards as div elements for board
// 		var cardElement = document.createElement('div');
// 		// card has class name of 'card'
// 		cardElement.className = 'card';
// 		// append cards to the board
// 		board.appendChild(cardElement);
//
// 	}
// }


var board = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		// Create new element
		var cardElement = document.createElement('div');

		// Adding attributes to element
		cardElement.setAttribute('data-card', cards[i]); // <div data-card='queen'></div>
		cardElement.className = 'card';
		// Add event listener
		cardElement.addEventListener('click', showImage);
		cardElement.addEventListener('click', isTwoCards);
		// Append element to board
		board.appendChild(cardElement);
	}
}

function showImage() {
	var currentCard = this.getAttribute('data-card');
	if (currentCard == 'king') {
		this.innerHTML = '<img src="king.png" alt="King of Hearts" />';
	} else {
		this.innerHTML = '<img src="queen.png" alt="Queen of Spades" />';
	}
}

var isMatch = function (twoCards) {
	if (twoCards[0] === twoCards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	// reset all images
	for (var i = 0; i < board.children.length; i++) {
		board.children[i].innerHTML = "";
	}
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}

createBoard();
