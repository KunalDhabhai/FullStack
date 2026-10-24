console.log("---------------------------------05_Strings.js---------------------------------")
let Name = "Kunal"
let NewName = new String("Kannuuu") // New Way Of Declaring Strings

console.log(Name);

console.log("");

console.log(NewName);

console.log("");


console.log(`My Name Is ${Name} And Majakiya Name Is ${NewName}`);

console.log(NewName.__proto__);

console.log("");

console.log(NewName.substring(2 , 6));

console.log("");

console.log(NewName.includes('n'));

console.log("");

console.log(NewName.length);

console.log("");

let Email = new String("Kunal121@gmail.commmmm");

console.log(Email.replace("@","-"));

console.log("");

let  CollegeName = "     Arya College Of Engineering     "   
  
console.log(CollegeName.trim());

console.log("");

console.log(CollegeName.split(/\s+/));

console.log("");

console.log(CollegeName.charAt(5));

console.log("");

console.log(CollegeName.trim().indexOf('ee'));











