/*
    Complete the code. Assign the object student the following properties:
    name, yearLvl (uppercase), age (number type), subject. Make sure to log the object,
    and also log a somewhat an introduction with the student's name, age and year level.
    
    Sample Output:
    {name: 'Kim John Bautista', yearLvl: 'SECOND', age: 20, subjects: Array(2), introduce: ƒ}
    My name is Kim John Bautista, second year student and 20 years old.
*/

const student = new Object();
student.name = window.prompt('Enter Your Name');
student.yearLvl = window.prompt('Enter Your Year Level (First, Second, Third, Fourth)');
student.age = parseInt(window.prompt('Enter Age'));
student.subjects = [{name: 'RE112', schedule: 'MWF'}, {name:'SOSC143', schedule:'TTh'}];

student.introduce = function () {
    console.log('My name is', this.name + ',', this.yearLvl, 'year student and', this.age, 'years old.');
};

console.log(student);
student.introduce();
///FINAL NAGID
