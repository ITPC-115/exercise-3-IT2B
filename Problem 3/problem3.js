/*
    Complete the code. Assign the object student the following properties:
    name, yearLvl (uppercase), age (number type), subject. Make sure to log the object,
    and also log a somewhat an introduction with the student's name, age and year level.
    
    Sample Output:
    {name: 'Kim John Bautista', yearLvl: 'SECOND', age: 20, subjects: Array(2), introduce: ƒ}
    My name is Kim John Bautista, second year student and 20 years old.
*/

const studentName = window.prompt('Enter Your Name');
const yearLevel = window.prompt('Enter Your Year Level (First, Second, Third, Fourth)').toUpperCase();
let age = window.prompt('Enter Age');
while (isNaN(parseInt(age)) || parseInt(age) <= 0) {
    age = window.prompt('Invalid input. Please enter a valid age:');
}
const subjects = [{ name: 'RE112', schedule: 'MWF' }, { name: 'SOSC143', schedule: 'TTh' }];
const student = {
    name: studentName,
    yearLvl: yearLevel,
    age: parseInt(age),
    subjects: subjects,
    introduce: function () {
        console.log(`My name is ${this.name}, ${this.yearLvl} year student and ${this.age} years old.`);
    }
};

console.log(student);
student.introduce();


