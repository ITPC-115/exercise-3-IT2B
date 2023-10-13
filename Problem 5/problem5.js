/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/


const minimum = 1;
const maximum = 100;
const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1));

var guess = Number(window.prompt('Guess the number (between 1 and 100):'));

  do {
    if (guess < randomNumber) {
      guess = Number(window.prompt('Try higher:'));
    } else if (guess > randomNumber) {
      guess = Number(window.prompt('Try lower:'));
    }
  } 
  while (guess !== randomNumber);

  if (guess == randomNumber)
  {
    console.log('Congratulations! You got it right');
  }
  
