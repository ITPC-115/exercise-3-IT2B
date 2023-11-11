/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
const person = [
    { name: 'Saber', age: 24, sex: 'Male' },
    { name: 'Layla', age: 27, sex: 'Female' },
    { name: 'Mia', age: 22, sex: 'Female' },
    { name: 'Alucard', age: 24, sex: 'Male' },
    { name: 'Gord', age: 23, sex: 'Male' },
    { name: 'Harry', age: 28, sex: 'Male' },
    { name: 'Balmond', age: 25, sex: 'Male' },
    { name: 'Karina', age: 27, sex: 'Female' },
    { name: 'Grock', age: 23, sex: 'Female' },
    { name: 'Kufhra', age: 26, sex: 'Female' },

];

user.forEach(function(person){
    console.log(person.name + " " + person.age + " "+ person.sex);    
    });
    
