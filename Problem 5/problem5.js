/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

console.log("Generated random number:", randomNumber);


function startGuessingGame() {
  let attempts = 0;

  function guessNumber() {
    const userGuess = parseInt(prompt("Guess the number between 1 and 100:"));

    

    attempts++;

    if (userGuess === randomNumber) {
      console.log("Congratulations, you got it right!");
      console.log("Total attempts:", attempts);
    } else if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
      alert("Please enter a valid number between 1 and 100.");
      guessNumber();
      return;
    } else if (userGuess < randomNumber) {
      alert("Try a higher number.");
      guessNumber();
    } else {
      alert("Try a lower number.");
      guessNumber();
    }
  }

  guessNumber();
}


startGuessingGame();