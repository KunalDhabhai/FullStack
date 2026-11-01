console.log("---------------------------------11_Scope.js---------------------------------")
console.log("");
if(true){
    const A = 10
    let B = 20 
    var C = 30   
}
// A = 20 
// B = 40
C = 100
// console.log("A :",A);
// console.log("B :",B);
console.log("C :",C);
// A And B Will Give Error At Printing Time Bcoz They Can't Be Accessed Outside The If Block 
// While C Can Be Accessed Bcoz It's Declared As Variable And Thats' Why It Is Not Used Coz Its Scope Has Issues 
if(true){
  const UserName = "Kunal Dhabhai"
   if(UserName === "Kunal Dhabhai"){
    let Website = "YT.com"
    console.log(`Welcome ${UserName} On Website ${Website}`);
   }
//    console.log("The Website Is : ",Website);
   
}

// In Nested Blocks The Parent Cannot Access Data Of Child Or Sub-Blocks 
// While Child Can Access Parents Data
console.log("");
console.log("---------------------------------------------------------------------------------");
console.log("");



function Info(){
    const Name = "Kunal Dhabhai"
    const Website = "Google.com"
    function PersonalInfo(){
        const Email = "Kunal@xxxxx.com"
        const PhNo = 92113901
        function Display(){
            console.log('Employee Name : ',Name);
            console.log('Company Website : ',Website);
            console.log('Email : ',Email);
            console.log('Phone Number : ',PhNo);
        }
        Display()
    }
    
    PersonalInfo()
}

Info()

const Num = 22
// This Is A "GLOBAL" Variable This Can Be Accessed Anywhere In Program
// The Variable's Defined Inside A Block Has Scope Inside That Block Only And Parent Block Elements Can Be Accessed By Child Blocks / Sub-Blocks 
// But Parent Cannot Access Any Thing From Its Child Or Sub-Block
function AddOne(){
    return Num + 1
}
console.log(AddOne());

const AddTwo = function(AddOne){
    return Num + 2
}

console.log(AddTwo());