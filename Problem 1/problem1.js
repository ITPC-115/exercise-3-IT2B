/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/

const User = [
    {name: "Reianne",   age: 19, sex: "Female"},
    {name: "Crizle",   age: 19, sex: "Female"},
    {name: "Ralph",     age: 16, sex: "Male"  },
    {name: "Joy",   age: 43, sex: "Female"},
    {name: "Errol",   age: 43, sex: "Male"  },
    {name: "Roland",  age: 41, sex: "Male"},
    {name: "Kent",    age: 19, sex: "Male"  },
    {name: "Servillio",   age: 94, sex: "Male"},
    {name: "Yasha", age: 19, sex: "Female"  },
    {name: "Gwen",age: 20, sex: "Female"}
]

for (const person of User){
    console.log(person.name, person.age, person.sex);
}