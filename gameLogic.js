var gameBoard = [
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 0],
];

var playerOneTurn = true;

var spaces = document.getElementsByClassName('space');

window.onload = function () {
  for ( var i = 0; i < spaces.length; i ++ ) {
    spaces[i].addEventListener('click', function () {
      if ( !this.innerHTML ) {
        playerOneTurn ? this.innerHTML = 'X' : this.innerHTML = 'O';
        console.log('clicked', this);
        playerOneTurn = !playerOneTurn;
      }
    }); 
  }
};

var count = 0;

// map the gameboard spaces to gameBoard matrix
  // onClick change matrix position to 1 or 2, dependent on given pleyer's turn


var checkHorizontal = function () {
  // tally number of 1 and 2 instances, horizontally across row
    // if number of instances === 3, endGame and increment player X win
};

var checkVertical = function () {
  // tally number of 1 and 2 instances, vertically along columns
    // if number of instances === 3, endGame and increment player X win
};

var checkDiagonal = function () {
  // tally number of 1 and 2 instances, diagonally
    // if number of instances === 3, endGame and increment player X win
};

// update