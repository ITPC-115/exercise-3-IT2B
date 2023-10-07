/*

    Create a simple guessing game. Write a program that will generate a random number 
    and will log the generated random number. Then ask the user for their guess number 
    until they guessed it correctly. When they got it correctly log "Congratulations you got it right".

    Constraints: The generated random number must be between 1 and 100 only.

*/

const randomNumber = Math.floor(Math.random() * 100) + 1;

let guesser = false;
let attempts = 0;

while (!guesser)
{
    //const randomNumber = Math.floor(Math.random() * 100) + 1;
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        attempts++;

        if (userGuess == randomNumber) {
            guesser = true;
            console.log(`Attempt no: ${attempts}, User Guess: ${userGuess}, Answer: ${randomNumber}`);
            alert(`Congratulations! You got it right.`);
            console.log(`Congratulations! You got it right.`);
        }
        else if (userGuess < randomNumber)
        {
            console.log(`Attempt no: ${attempts}, User Guess: ${userGuess}, Answer: ${randomNumber}`);
            alert(`Your Number: ${userGuess} is Wrong\n>>`);
        }
        
        else
        {
            console.log(`Attempt no: ${attempts}, User Guess: ${userGuess}, Answer: ${randomNumber}`);
            alert(`Your Number: ${userGuess} is Wrong\n<<`);
        }
    }
}