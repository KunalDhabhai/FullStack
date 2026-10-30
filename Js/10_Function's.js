console.log("---------------------------------10_Function's.js---------------------------------")
console.log("");

function IsloggedIn(Username){
  console.log(`${Username} Just Logged In`);
  
}
IsloggedIn("Kunal");
function IsPassword(number){
    if(number === 1234){
        console.log("Loggin Successful");
    }
    else 
        console.log("Oops! Wrong Passkey");
        
}
IsPassword(1234);

function Sum(Number1,Number2){
    if(!(Number1&&Number2)){
        console.log("Enter A Number");
        return
    }
    return Number1 + Number2 ;
}
const Result = Sum(21,3)
console.log("Result : ",Result);

function AddNum(...Num){
    console.log(Num);
    
}
AddNum(200,300,400,600)
 
// This Is Called Rest Method When Function Is Declared In Such Manner.Then It Can Take Multipe Inputs With Single Variable
const Num = 22
const Addtwo = function(){
    return Num + 2
}
console.log('Addition Is : ',Addtwo());
// Function Can Be Declared Like This Also


const Info = {
     Name : "Kunal Dhabhai",
     PhNo : 98227519
}

function Display({Name,PhNo}){
     console.log(`User Is ${Name} And Phone Number Used To Login Is ${PhNo}`);
     
}
Display(Info)