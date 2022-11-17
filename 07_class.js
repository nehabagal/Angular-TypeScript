var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = frequentFlyerno;
    }
    return Passenger;
}());
var passenger = new Passenger("ABC", "DEF", 11); //object creation using class Passenger
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerno);
