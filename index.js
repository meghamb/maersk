const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffle() {
  let list = [...array].sort(() => Math.random() - 0.5);
  assignVal(list);
}
function sort() {
  assignVal(array);
}

function assignVal(arr) {
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = arr[i];
  }
}
