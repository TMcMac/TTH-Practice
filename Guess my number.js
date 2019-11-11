/*
This is a random guessing game that gives the user two tries to guess the correct number between 1 and 6
*/


//assume the user does not get it right on the first try.
var correctGuess = false;

//random number generation for a number between 1 and 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* Test to see if player is
1.correct
2.guessed too low
3. guessed too high
*/

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
  if (parseInt(guessMore) === randomNumber) {
      correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
   var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
  if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
  }
}


//test to see if player is correct and output response.
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}