

//Get the starting word
function getStartWord() {
  return 'A';
}

//Get the target word
function getTargetWord() {
  return 'G';
}


// ---ACTIONS---

//Increase the letter
function increaseLetter(word, pos) {

  var ascii = word.charCodeAt(pos);

  if (ascii == 90) ascii = 65;
  else ascii++;

  return word.substring(0, pos) + String.fromCharCode(ascii) + word.substring(pos+1, word.length);

}

//Decrease the letter
function decreaseLetter(word, pos) {

  var ascii = word.charCodeAt(pos);

  if (ascii == 65) ascii = 90;
  else ascii--;

  return word.substring(0, pos) + String.fromCharCode(ascii) + word.substring(pos+1, word.length);

}

//Shift word to the left
function shiftLeft(word) {
  return word.substring(1, word.length) + word.charAt(0);
}

//Shift word to the right
function shiftRight(word) {
  return word.charAt(word.length-1) + word.substr(0, word.length-1);
}

//Duplicate last letter
function addLetter(word) {
  return word + word.charAt(word.length-1);
}

//Delete last letter
function deleteLetter(word) {
  return word.substring(1, word.length);
}

// console.log(increaseLetter('ABC', 1));

export { addLetter, deleteLetter, increaseLetter, decreaseLetter, shiftRight, shiftLeft };