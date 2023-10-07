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
        //1
        name: "Vincent",
        age: 20,
        sex: "Male" 
    },
    {
        //2
        name: "Alayssa",
        age: 21,
        sex: "Female" 
    },
    {
        //3
        name: "Neeko",
        age: 27,
        sex: "Female" 
    },
    {
        //4
        name: "Allete",
        age: 28,
        sex: "Female" 
    },
    {
        //5
        name: "Haily",
        age: 22,
        sex: "Female" 
    },
    {
        //6
        name: "Jamie",
        age: 23,
        sex: "Female" 
    },
    {
        //7
        name: "Michelle",
        age: 22,
        sex: "Female" 
    },
    {
        //8
        name: "Marry",
        age: 23,
        sex: "Female" 
    },
    {
        //9
        name: "Jane",
        age: 23,
        sex: "Female" 
    },
    {
        //10
        name: "grace",
        age: 21,
        sex: "Female" 
    }
        
];


for (let i = 0; i < user.length; i++) {
    let profile = user[i];
    console.log(`${profile.name} ${profile.age} ${profile.sex}`);
}