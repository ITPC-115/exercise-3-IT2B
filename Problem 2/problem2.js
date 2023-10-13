/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword my in here.
*/

let Object  = {
    name : "Thinkpad Laptop",
    brand: "Thinkpad",
    price: 99,
    color: "black",
};

let my = Object;
my.name = window.prompt("Enter the name: ");
my.brand = prompt("Enter brand: ");
my.price = prompt("Enter its price: ");
my.color = prompt("Enter its color");

DisplaythemAll_uwu(Object)

function DisplaythemAll_uwu(Object){
    let my = Object;
    console.log("Name: ", my.name, '\n', 'Brand: ', my.brand, '\n', 'Price: ' , my.price, '\n', 'Color: ' , my.color);
}
//my

