/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed

        
*/

var arr = [
    {
        name: 'Alexis',
        age: 21,
        sex: 'Male'
    },
    {
        name: 'Niel',
        age: 20,
        sex: 'Male'
    },
    {
        name: 'Kent',
        age: 22,
        sex: 'Male'
    },
    {
        name: 'Crizle',
        age: 21,
        sex: 'Female'
    },
    {
        name: 'Jhame',
        age: 21,
        sex: 'Male'
    },
    {
        name: 'Kim',
        age: 23,
        sex: 'Male'
    },
    {
        name: 'Apple',
        age: 20,
        sex: 'Male'
    },
    {
        name: 'Grapes',
        age: 26,
        sex: 'Male'
    },
    {
        name: 'Mio',
        age: 24,
        sex: 'Complicated'
    },
    {
        name: 'Steben',
        age: 24,
        sex: 'Male'
    },

];

arr.forEach(display);

function display(arr){
    console.log(arr.name + " " + arr.age + " " + arr.sex);
}

