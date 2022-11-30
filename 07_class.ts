class Passenger{
    firstName:string;
    lastName:string;
    frequentFlyerno: number;
    constructor(firstName:string, lastName:string, frequentFlyerno:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = frequentFlyerno;
    }
    display():void{
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerno);
    }
}
var passenger = new Passenger("ABC", "DEF", 11); //object creation using class Passenger
passenger.display();
var passenger2 = new Passenger("XYZ", "GHJ", 12);
passenger2.display();

