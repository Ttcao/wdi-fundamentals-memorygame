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

var gameCard = 4;
var board = document.getElementById('game-board');
// the function creates the cards for the board
var createCards = function() {
	// create cards for board
	for (var i = 0; i < gameCard; i++) {
		// create cards as div elements for board
		var cardElement = document.createElement('div');
		// card has class name of 'card'
		cardElement.className = 'card';
		// append cards to the board
		board.appendChild(cardElement);

	}
}
