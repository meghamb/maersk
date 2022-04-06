let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffleArray() {
  let squares = document.getElementsByClassName('square');
  shuffle = array.sort(() => Math.random() - 0.5);
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = shuffle[i];
  }
}
function sort() {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let squares = document.getElementsByClassName('square');
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = array[i];
  }
}
