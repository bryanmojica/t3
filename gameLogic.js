


// display player move

var spaces = document.getElementsByClassName('space');

console.log(spaces, 'spaces are');

for ( var i = 0; i < spaces.length; i ++ ) {
  spaces[i].addEventListener('click', function () {
    console.log('clicked');
  }); 
}
