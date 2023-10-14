let product = {
    name: "Gaming phone",
    brand: "Asus predetor",
    price: "Php 20,299.00",
    color: "pink",
    displayProperties: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Brand: ${this.brand}`)
        console.log(`Price: ${this.price}`)
        console.log(`Color: ${this.color}`)
    }
};

product.displayProperties();

