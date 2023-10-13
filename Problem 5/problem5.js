/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

alert("This is a guessing game \nYou should guess a random number.");
var number = parseInt(window.prompt("Enter a number between 1-100 only: "));
var guess = Math.floor(Math.random() * 100);

do{
    var guessNumber = Number(window.prompt('Guess the number'));
}while(guessNumber != number);
console.log('Congratulations you got it right');
