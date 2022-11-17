var objProduct = {
    id: 123,
    name: "Iphone",
    description: "It's awesome",
    price: 60000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
objProduct.display();
