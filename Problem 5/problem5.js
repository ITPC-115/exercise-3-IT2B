/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

alert(`This is a guessing game \nYou should guess a random number.`);
let p = parseInt(window.prompt(`Enter any number that is between 1-100 only: `));
let thechosennumber = 0;
const randomnumber = Math.floor(Math.random() * 100);

//==============================================
while (p !== randomnumber) {
    if (p > randomnumber) {
        p = parseInt(window.prompt(`Oh no your number is too high! Try Again :(. \nEnter again: `));
        thechosennumber++;
    }
    if (p < randomnumber) {
        p = parseInt(window.prompt(`Oh no your number is too low! Try Again :(. \nEnter again: `));
        thechosennumber++;
    }
}
if (p === randomnumber) {
    alert(`You've entered ${thechosennumber} times\nCongratulations you got it right, its ${randomnumber}`);
}