/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/

var array = [
{
    name: 'Juan',
    age: 24,
    sex: 'Male',
},
 
{
    name: 'Marie',
    age: 27,
    sex: 'Female',
},

{
    name: 'Lotty',
    age: 22,
    sex: 'Female',
},

{
    name: 'Kent',
    age: 20,
    sex: 'Male',
},
{
    name: 'Crizle',
    age: 19,
    sex: 'Female',
},
{
    name: 'Niel',
    age: 20,
    sex: 'Male',
},
{
    name: 'Alexis',
    age: 21,
    sex: 'Male',
},
{
    name: 'Eman',
    age: 22,
    sex: 'Male',
},
{
    name: 'Gelo',
    age: 21,
    sex: 'Male',
},
{
    name: 'Charles',
    age: 19,
    sex: 'Male',
},

];

array.forEach(display);

function display(array){
    console.log(array.name + " " + array.age + " " + array.sex);
}



