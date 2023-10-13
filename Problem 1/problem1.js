/*
    Define an array that contains 10 objects which has the properties
    name, age, and sex. Iterate throughout the array and display each of their name, age, and sex (one object per line in console).

    Example:
    John 24 Male
    Marie 27 Female
    Lotty 22 Female
        -- make sure that name and sex are strings and age is a number when displayed
*/

let Pangalan1 = {
    name: ['Jer', 'Ian', 'Sha', 'Tys', 'Car', 'Dry', 'Rea', 'Lin', 'Ces', 'Ric'],
    age: [19, 22, 24, 23, 21, 20, 22, 23, 20, 19],
    sex: ['Male', 'Male', 'Female', 'Male', 'Male', 'Male', 'Female', 'Male', 'Female', 'Female']
}
for(let i =0; i < 10; i++)
{
    console.log(Pangalan1.name[i], Pangalan1.age[i], Pangalan1.sex[i]);
}

