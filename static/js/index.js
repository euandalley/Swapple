import { addLetter, deleteLetter, increaseLetter, decreaseLetter, shiftRight, shiftLeft } from './game.js'

const startWord = "ABC";
const targetWord = "WATER";
var currentWord;
var actionCount = 0;

var actionHistory = [];

const wordDiv = $('#word');



$('document').ready(function() {

  currentWord = startWord;
  $('#target-word').text(targetWord);
  $('#start-word').text(startWord);

  overlayOn();

  renderPage();

  return false;

});



//--- RENDER THE PAGE ELEMS ---


function renderPage() {

  actionCount = actionHistory.length;
  $('#action-count').text(actionCount);

  renderCurrentWord();
  renderButtons();

  //End of game
  if (currentWord == targetWord) {
    alert('Congrats! Solved in ' + actionCount + '.');
  }

}


//Update the word displayed
function renderCurrentWord() {

  // console.log(currentWord);
  wordDiv.empty();

  for (var i = 0; i < currentWord.length; i++) {
    const letter = currentWord.charAt(i);
    const letterHtml = `<div id="letter-${i}" class="letter-container" style="display: inline-block;">
                          <button type="button" class="letter-down">🔺</button>
                          <h1 class="letter">${letter}</h1>
                          <button type="button" class="letter-up">🔻</button>
                        </div>`;
    wordDiv.append(letterHtml);

  }

  return false;

}


function renderButtons() {

  const undoBut = $('#undo-button');
  const resetBut = $('#reset-button');

  if (actionCount == 0) {
    undoBut.prop('disabled', true);
    resetBut.prop('disabled', true);
  } else {
    undoBut.prop('disabled', false);
    resetBut.prop('disabled', false);
  }

}


// --- UNDO BUTTON --

$('#undo-button').click(function() {
  currentWord = actionHistory.pop();
  console.log(actionHistory);
  renderPage();
  return false;
});


// --- RESET BUTTON ---

$('#reset-button').click(function() {
  currentWord = startWord;
  actionHistory = [];
  actionCount = 0;
  renderPage();
  return false;
})


//--- GAME ACTIONS ---

function actionMade(newWord) {

  actionHistory.push(currentWord);
  currentWord = newWord;
  console.log(actionHistory);
  renderPage();

  return false;

}


//Append the last letter to the word
$('#addLetter').click(function(){
  let newWord = addLetter(currentWord);
  actionMade(newWord);
  return false;
});


//Delete the first letter
$('#deleteLetter').click(function(){
  
  if (currentWord.length == 1) return false;

  let newWord = deleteLetter(currentWord);
  actionMade(newWord);
  return false;
});


//Increase letter value
$('#word').on('click', '.letter-up', function() {
  let letter = $(this).siblings('.letter');
  let parentId = $(this).parent().attr('id');
  let letterPos = parseInt(parentId.substr(parentId.length-1, 1));
  // console.log(letterPos + ', ' + currentWord);

  let newWord = increaseLetter(currentWord, letterPos);
  // console.log('Increase:' + currentWord + ', ' + letterPos);
  actionMade(newWord);
  return false;
});


//Decrease letter value
$('#word').on('click', '.letter-down', function() {
  let letter = $(this).siblings('.letter');
  let parentId = $(this).parent().attr('id');
  let letterPos = parseInt(parentId.substr(parentId.length-1, 1));

  let newWord = decreaseLetter(currentWord, letterPos);
  // console.log('Decrease:' + currentWord + ', ' + letterPos);
  actionMade(newWord);
  return false;
});


//Move word to the right
$('#shift-right').click(function(){
  let newWord = shiftRight(currentWord);
  actionMade(newWord);
  return false;
});


//Move word to the left
$('#shift-left').click(function(){
  let newWord = shiftLeft(currentWord);
  actionMade(newWord);
  return false;
});



// --- OVERLAY ---

function overlayOn() {
  $('#overlay').css('display', 'block');
}

function overlayOff() {
  $('#overlay').css('display', 'none');
}

$('#overlay-exit').click(function(){
  overlayOff();
  return false;
});