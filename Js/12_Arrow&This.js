console.log("---------------------------------10_Function's.js---------------------------------")
console.log("");

const Company = {
    Name : "Kunal Dhabhai",
    Salary : 12000,
    Website : function(){
        console.log(`Hello ${this.Name}, Welcome To Our Website`);
        
    }
    
}
console.log(Company.Website());


console.log("");
const Greet = () => {

    console.log(`Hello!!!`);
    
}
Greet()
const Adder = (Num1,Num2) => (Num1 + Num2)
console.log(Adder(2,4))

// IIFE 
const User = "Rajeev";
(() => {
      console.log(`Hello ${User}`);
      
})()

