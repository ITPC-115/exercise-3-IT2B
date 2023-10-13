/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/

let Object  = {
    name : "Honda Suzuki Guitar",
    brand: "Honda",
    price: 50000,
    color: "Rainbow",
};

let x = Object;
x.name = window.prompt("Enter the name: ");
x.brand = prompt("Enter brand: ");
x.price = prompt("Enter its price: ");
x.color = prompt("Enter its color");

DisplaythemAll_uwu(Object)

function DisplaythemAll_uwu(Object){
    let a = Object;
    console.log("Name: ", a.name, '\n', 'Brand: ', a.brand, '\n', 'Price: ' , a.price, '\n', 'Color: ' , a.color);
}
//UPDATE


