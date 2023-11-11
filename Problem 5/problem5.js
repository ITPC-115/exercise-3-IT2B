/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
const randomNumber = Math.floor(Math.random() * 100) + 1;

function playGuessingGame() {
    const userGuess = parseInt(prompt('Guess the number between 1 and 100:'));

    if (userGuess === randomNumber) {
        console.log('Congratulations, you got it right!');
    } else if (userGuess < randomNumber) {
        console.log('Too low! Try again.');
        playGuessingGame(); 
    } else {
        console.log('Too high! Try again.');
        playGuessingGame(); 
    }
}

console.log(`Generated Number: ${randomNumber}`);
playGuessingGame();