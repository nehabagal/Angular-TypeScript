interface IExterior{
    color:string;
    noOfDoors:number;
}
interface IInterior{
    seats:number;
    auto:boolean;
}
interface ICar extends IExterior, IInterior{
    make:string;
    model:string;
    year:number;
}
var myCar = {
    make: "TATA",
    model: "Altroz",
    year: 2022,
    color: "Grey",
    noOfDoors: 4,
    seats: 4,
    auto: false
}