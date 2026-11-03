console.log("---------------------------------13_ControlFlow.js---------------------------------")
console.log("");

if (true) {
    console.log("Welcome!...");
    
}

let Name = "Kunal"
const Email = "kGoogle245@.com"
if (Name && Email) {
    console.log(`${Name}, Just LoggedIn... With Email : ${Email}`);
 }
else{
    console.log(`Invalid LoggIn`);
    
} 

// True => 1 , {} , Function , String , " " , []
// False => 0 , -0 , "" , '' , BigInt 0n 

const Id = []
if (Id) {
    console.log("---");
    
}
else{
    console.log('Invalid Id');
}

// Arrow Function
const User = () => {
    console.log("It's True..."); 
}
if(User){
    console.log("Great Buddy....");
    
}
else{
 console.log("Oops!..Need More Learning");
}
// Normal Funtion
const UserName = "Kunal"
const Employee = function(){
   console.log(`Employee Name Is ${UserName}`);
}
if (Employee) {
    Employee()
}

const Uname = "Jitesh"
const Uemail = "Jit@gmail.com"
const Salary = 12000
if(Uname || Salary <= 1000){
   console.log(`${Uname} Has Salary ${Salary}`);
   
}
else if(Uemail || Salary >= 1000){
      console.log(`${Uname} Has Salary ${Salary}`);
}
else{
    console.log("Invalid Detail.....");
    
}

const Number = 10 ?? null
console.log('Value : ',Number);
