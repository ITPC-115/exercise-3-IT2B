/*
    Define an object with the properties name, brand, price, and color,
    and also a method to display the properties.
    make sure that when the code is run in the browser it will log the
    properties of the object. -- Make sure to incorprate the keyword this in here.
*/

const item = 
{
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 84990,
    color: 'Black Titanium',
  
    
    displayProperties() 
    {
      console.log(`Name: ${this.name} Brand: ${this.brand} Price: ${this.price} Color: ${this.color}`);
    }
};

    item.displayProperties();
