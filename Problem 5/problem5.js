/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
let x = parseInt(window.prompt("Enter a number you want to guess"));
const guess = Math.floor(Math.random() * 100);
let counter = 0;
while (x !== guess) {
    if (x > guess) {
        x = parseInt(window.prompt("Oops!.. You're too high. \nEnter again: "));
        counter++;
    }
    if (x < guess) {
        x = parseInt(window.prompt("Oops!.. You're too low. \nEnter again: "));
        counter++;
    }
}
if (x === guess) {
    alert("You've entered " + counter + " times\nCongratulations you got it right, its " + guess);
}
//FINAL NAGID