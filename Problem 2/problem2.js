/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/

let i = new Object();
i.name = window.prompt(`Enter name: `);
i.brand = prompt(`Enter brand: `);
i.price = prompt(`Enter price: `);
i.color = prompt(`Enter color: `);

DisplayAll(i)

function DisplayAll(i){
    console.log(`Name: `, i.name, '\nBrand: ', i.brand, '\nPrice: ' , i.price, '\nColor: ' , i.color);
}
