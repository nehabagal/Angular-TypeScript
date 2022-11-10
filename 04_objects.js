var emp = {
    name: "ABC",
    score: 200
};
for (var em in emp) {
    console.log(emp.name);
}
//Optional parameters
function display(id, name, role) {
    console.log("ID", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, "ABS", "Admin");
display(1, "DEF");
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstName = std.firstName, userLastName = std.lastName; //we can rename the properties in object destructuring
console.log(userFirstName, userLastName);
var arr = [20, 30, 12, 100, 20];
arr.splice(2, 3, 88, 99, 77);
console.log(arr);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
