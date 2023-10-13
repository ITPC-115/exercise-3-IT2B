/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/
const array = [
    {name: "biboy",   age: 63, sex: "Male"},
    {name: "nene",   age: 65, sex: "Female"},
    {name: "didoy",     age: 68, sex: "Male"  },
    {name: "dandansay",   age: 66, sex: "Female"},
    {name: "laloy",   age: 57, sex: "Male"  },
    {name: "gab",  age: 65, sex: "Female"},
    {name: "cess",    age: 50, sex: "Female"  },
    {name: "gel",   age: 61, sex: "Female"},
    {name: "alexis", age: 55, sex: "Male"  },
    {name: "denden",age: 54, sex: "Female"}
]

//SHESH

for (const person of array){
    console.log(person.name, person.age, person.sex);
}