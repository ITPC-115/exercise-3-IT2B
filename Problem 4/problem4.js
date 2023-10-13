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

const keyvalue = 'age';

const name1 = prompt('Enter your name: ');
const initialAge = parseInt(prompt('Enter your age: '));
const person = {name: name1, age: initialAge};

for(let i = 2024; i < 2034; i++)
{   
    person[keyvalue]++;
    console.log(i + ` '${person.name}' ${person[keyvalue]}`);   
}
alert(`You are ${person[keyvalue]}  years old after 10 years`);