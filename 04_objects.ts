var emp={
    name: "ABC",
    score: 200
}
for (const em in emp) {
    console.log(emp.name);
    
}

//Optional parameters
function display(id:number, name:string, role?:string) {
    console.log("ID", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, "ABS", "Admin");
display(1, "DEF");

var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for(var i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}

var std={                       //Object Destructuring
    firstName: "Jack",
    lastName: "Sparrow"
}
var { firstName: userFirstName, lastName: userLastName}= std; //we can rename the properties in object destructuring
console.log(userFirstName, userLastName);

var arr: number[] =[20, 30, 12, 100, 20];
arr.splice(2,3,88,99,77);
console.log(arr);
function add(num1:number, num2:number) {
    return num1+num2;
}
console.log(add(10,20));
