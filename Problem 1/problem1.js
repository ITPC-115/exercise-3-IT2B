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
    {name: "apol",   age: 63, sex: "Male"},
    {name: "miko",   age: 65, sex: "Female"},
    {name: "don",     age: 68, sex: "Male"  },
    {name: "diego",   age: 66, sex: "Male"},
    {name: "canton",   age: 57, sex: "Male"  },
    {name: "piaya",  age: 65, sex: "Female"},
    {name: "sticko",    age: 50, sex: "Female"  },
    {name: "vcut",   age: 61, sex: "Female"},
    {name: "helmet", age: 55, sex: "Male"  },
    {name: "laptop",age: 54, sex: "Male"}
]

//FINAL

for (const person of array){
    console.log(person.name, person.age, person.sex);
}