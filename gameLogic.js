


// display player move
var gameBoard = [
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 0],
];

var playerOneTurn = true;

var spaces = document.getElementsByClassName('space');

window.onload = function () {
  for ( var i = 0; i < spaces.length; i ++ ) {
    console.log('looping on this', spaces[i]);
    spaces[i].addEventListener('click', function () {
      playerOneTurn ? this.innerHTML = 'X' : this.innerHTML = 'O';
      playerOneTurn = !playerOneTurn;
    }); 
  }
};
