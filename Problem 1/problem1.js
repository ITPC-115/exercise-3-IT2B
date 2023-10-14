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
        name: "Vince",
        age: 20,
        sex: "Male" 
    },
    {
        name: "soy",
        age: 21,
        sex: "Female" 
    },
    {

        name: "Nemo",
        age: 27,
        sex: "Female" 
    },
    {
        name: "miya",
        age: 28,
        sex: "Female" 
    },
    {
        name: "Harly",
        age: 22,
        sex: "Female" 
    },
    {
        name: "Jam",
        age: 23,
        sex: "Female" 
    },
    {
        name: "Mich",
        age: 22,
        sex: "Female" 
    },
    {
        name: "Maro",
        age: 23,
        sex: "Female" 
    },
    {
        name: "Junela",
        age: 23,
        sex: "Female" 
    },
    {
        name: "grape",
        age: 21,
        sex: "Female" 
    }
        
];
for (let i = 0; i < user.length; i++) {
    let profile = user[i];
    console.log(`${profile.name} ${profile.age} ${profile.sex}`);
}