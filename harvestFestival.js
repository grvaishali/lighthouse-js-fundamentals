const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
const list = [];
var i = 0;
var j = 0;
var finalPosition = function (moves) {
  for (var k = 0; k < moves.length; k++) {
    if (moves[k] === "north") {
      j++;
    } else if (moves[k] === "south") {
      j--;
    } else if (moves[k] === "west") {
      i--;
    } else if (moves[k] === "west") {
      i--;
    } else if (moves[k] === "east") {
      i++;
    }
  }
  list.push(i);
  list.push(j);
  return list;
}

console.log(finalPosition(moves));