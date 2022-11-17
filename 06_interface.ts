interface IProduct {
    id:number;         //property declaration, we can only declare properties in interface and not implementation
    name:string;
    description?:string;
    price:number;
display():void;

}

var objProduct : IProduct ={
    id: 123,
    name: "Iphone",
    description: "It's awesome",
    price: 60000,      //Implementation of an interface
    display():void{
console.log(this.id + " " + this.name);

    }
}
objProduct.display();