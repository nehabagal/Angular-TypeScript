class Passenger{
    firstName:string;
    lastName:string;
    frequentFlyerno: number
    constructor(firstName:string, lastName:string, frequentFlyerno:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = frequentFlyerno;
    }
}
var passenger = new Passenger("ABC", "DEF", 11); //object creation using class Passenger
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerno);

