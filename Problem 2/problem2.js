/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/

let x = new Object();
x.name = window.prompt("Enter the name: ");
x.brand = prompt("Enter brand: ");
x.price = prompt("Enter its price: ");
x.color = prompt("Enter its color");

DisplaythemAll_uwu(x)

function DisplaythemAll_uwu(x){
    console.log("Name: ", x.name, '\nBrand: ', x.brand, '\nPrice: ' , x.price, '\nColor: ' , x.color);
}
