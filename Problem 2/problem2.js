/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/

let Object  = {
    name : "asus laptop",
    brand: "asus",
    price: 55444,
    color: "black",
};

let x = Object;
x.name = window.prompt("Enter the name: ");
x.brand = prompt("Enter brand: ");
x.price = prompt("Enter its price: ");
x.color = prompt("Enter its color");

DisplaythemAll_uwu(Object)

function DisplaythemAll_uwu(Object){
    let x = Object;
    console.log("Name: ", x.name, '\n', 'Brand: ', x.brand, '\n', 'Price: ' , x.price, '\n', 'Color: ' , x.color);
}
//FINAL