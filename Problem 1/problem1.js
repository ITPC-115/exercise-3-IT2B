/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
let user = [
    {
    name: 'Juan',
    age: `24`,
    sex: `Male`,
    },

    {
    name: 'Abdul',
    age: '23',
    sex: `Male`,
    },

    {
    name: 'Happy',
    age: '25',
    sex: `Male`,
    },

    {
    name: 'Jarvis',
    age: '50',
    sex: `Male`,
    },

    {
    name: 'Tony',
    age: '29',
    sex: `Male`,
    },

    {
    name: 'Hiya',
    age: '23',
    sex: `Female`,
    },

    {
    name: 'Mary',
    age: '21',
    sex: `Female`,
    },

    {
    name: 'Boa',
    age: '26',
    sex: `Female`,
    },

    {
    name: 'Potty',
    age: '28',
    sex: `Female`,
    },

    {
    name: 'Wanda',
    age: '29',
    sex: `Female`,
    },

];
user.forEach(function(person){
console.log(person.name + " " + person.age + " "+ person.sex);    
});

