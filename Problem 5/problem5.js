/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1));

var userGuess = Number(window.prompt('Guess the number (between 1 and 100):'));

  do {
    if (userGuess < randomNumber) {
      userGuess = Number(window.prompt('Try higher:'));
    } else if (userGuess > randomNumber) {
      userGuess = Number(window.prompt('Try lower:'));
    }
  } 
  while (userGuess !== randomNumber);
  alert('Congratulations! You got it right');