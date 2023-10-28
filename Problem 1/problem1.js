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
    {name: "Emilio",   age: 63, sex: "Female"},
    {name: "Manuel",   age: 65, sex: "Female"},
    {name: "Jose",     age: 68, sex: "Male"  },
    {name: "Sergio",   age: 66, sex: "Female"},
    {name: "Manuel",   age: 57, sex: "Male"  },
    {name: "Elpidio",  age: 65, sex: "Female"},
    {name: "Ramon",    age: 50, sex: "Male"  },
    {name: "Carlos",   age: 61, sex: "Female"},
    {name: "Diosdado", age: 55, sex: "Male"  },
    {name: "Ferdinand",age: 54, sex: "Female"}
]

for (const person of array){
    console.log(person.name, person.age, person.sex);
} 

