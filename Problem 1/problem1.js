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
    {name: "Papa Jeps",   age: 69, sex: "Male"},
    {name: "K-Ram",   age: 10, sex: "Male"},
    {name: "Sinio",     age: 53, sex: "Male"  },
    {name: "Zaito",   age: 65, sex: "Female"},
    {name: "Maria Juana",   age: 52, sex: "Female"  },
    {name: "Mama Blue",  age: 52, sex: "Male"},
    {name: "Kent Bungal",    age: 54, sex: "Male"  },
    {name: "Ninong Carlos",   age: 56, sex: "Male"},
    {name: "Idol Ervon", age: 45, sex: "Male"  },
    {name: "Kuya Kyle",age: 32, sex: "Male"}
]

for (const person of array){
    console.log(person.name, person.age, person.sex);
}