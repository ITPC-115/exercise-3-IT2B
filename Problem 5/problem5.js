/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

function playGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    const userGuess = parseInt(prompt('Guess the number between 1 and 100:'));

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        playGuessingGame(); 
    } else if (userGuess === randomNumber) {
        alert('Congratulations, you got it right!');
    } else if (userGuess < randomNumber) {
        alert('Too low! Try again.');
        playGuessingGame();
    } else {
        alert('Too high! Try again.');
        playGuessingGame();
    }
}

playGuessingGame(); 


