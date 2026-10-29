console.log("---------------------------------09_Objects'.js---------------------------------")
console.log("");


const Sym = Symbol("Key");
console.log('This Is Symbol : ',Sym);

const Officer = {
    Name : "Kunal Dhabhai",
    Post : "Web-Dev",
    Number : 9276392290,
    Id_No : 201,
    "Place" : "Jaipur",
    [Sym] : "@"
}
console.log(Officer);
console.log("                             Accessing Objecs' Uniquely                             ");

console.log('Name :',Officer['Name']);
console.log('Place : ',Officer.Place);
Officer.Post = "Data-Scientist";
console.log("                                  Updating Object                                 ");
console.log(Officer);

// Accessing Nested Objects
const Company = {
     Ename : "Kunal Dhabhai",
     Eid : {
        NewId : 12,
        OldId : 10
     },
     Salary : 1200000
 }
console.log(Company.Eid);











