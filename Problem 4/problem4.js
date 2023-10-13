/*
    Complete the code. It is a common understanding that a person is aging every year.
    Write a program that will ask a user for it's name and age.
    Then, create an object with properties name and age out of those data.
    Log the name and age in every year for the next ten years.
    Finally, display in alert your age after ten years.      - Make sure to use the given initial code.


    Sample Logs:
    2024 'Kim John Bautista' 25
    2025 'Kim John Bautista' 26
    2026 'Kim John Bautista' 27
    2027 'Kim John Bautista' 28
    2028 'Kim John Bautista' 29
    2029 'Kim John Bautista' 30
    2030 'Kim John Bautista' 31
    2031 'Kim John Bautista' 32
    2032 'Kim John Bautista' 33
    2033 'Kim John Bautista' 34
*/

const keyValue = 'age';
const my = new Object();
my.myname = window.prompt('Enter your name: ');
my.age = parseInt(window.prompt('Enter your age: '));

// INSERT CODE HERE
let year = 2024;
let lol = my.age;
for(let j=0; j<10; j++){
    console.log(year, my.myname, lol);
    lol++;
    year++;
}

alert("You are " + lol + " years old after 10 years");
//SHESH
