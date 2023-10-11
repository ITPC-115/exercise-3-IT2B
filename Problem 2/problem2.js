/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/


let product = {
    name: "Gaming Laptop",
    brand: "Asus ROG",
    price: "Php 226,757.90",
    color: "Matte Black",
    displayProperties: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Brand: ${this.brand}`)
        console.log(`Price: ${this.price}`)
        console.log(`Color: ${this.color}`)
    }
};

product.displayProperties();