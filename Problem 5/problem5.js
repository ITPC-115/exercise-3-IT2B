/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/
let my = parseInt(window.prompt("Enter a number you want to guess"));
const guess = Math.floor(Math.random() * 100);
let num = 0;
while (my !== guess) {
    if (my > guess) {
        my = parseInt(window.prompt("Oops!.. You're too high. \nEnter again: "));
        num++;
    }
    if (my < guess) {
        my = parseInt(window.prompt("Oops!.. You're too low. \nEnter again: "));
        num++;
    }
}
if (my === guess) {
    alert("You've entered " + num + " times\nCongratulations you got it right, its " + guess);
}
//SHESH