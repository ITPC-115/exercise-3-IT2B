/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/

const people = [
    { name: 'John', age: 24, sex: 'Male' },
    { name: 'Marie', age: 27, sex: 'Female' },
    { name: 'Lotty', age: 22, sex: 'Female' },
    { name: 'Peter', age: 24, sex: 'Male' },
    { name: 'Louie', age: 23, sex: 'Male' },
    { name: 'Harry', age: 28, sex: 'Male' },
    { name: 'Zayn', age: 25, sex: 'Male' },
    { name: 'Cassie', age: 27, sex: 'Female' },
    { name: 'Maddy', age: 23, sex: 'Female' },
    { name: 'Andy', age: 26, sex: 'Female' },

];

for (let i = 0; i < people.length; i++) {
    const user = people[i];
    console.log(`${user.name} ${user.age} ${user.sex}`);
}

