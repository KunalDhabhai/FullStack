console.log("---------------------------------06_Nums_And_Math.js---------------------------------")
console.log("");

// +++++++++++++++++++++++++++++++++++++++Numbers+++++++++++++++++++++++++++++++++++++++
console.log("                                        Numbers                                        ");


const Score = 400
console.log(Score);
console.log("");

const Balance = new Number(100);
console.log(Balance);

console.log('Length Of Number Is : ',Balance.toString().length);

console.log('Using toFixed : ',Balance.toFixed(2));

const OtherNumber = 123.895;
console.log('Using toPrecision : ',OtherNumber.toPrecision(3));

const Hundreds = 1000000;
console.log(Hundreds.toLocaleString('en-IN')); // en-IN is for Using The Indian Represenatation Of Value Otherwise 
                                                // It'll Give Output According To American Rules


// +++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++

console.log("");
console.log("                                        Maths                                        ");
console.log("");



console.log('Round-Off Of Value "4.4" Is : ',Math.round(4.4));
console.log('Round-Off Of Value "4.2" Using Ceil Is : ',Math.ceil(4.2));
console.log('Round-Off Of Value "4.8" Using Floor Is : ',Math.floor(4.8));
console.log('Absolute Of "-66" Using Abs Is : ',Math.abs(-66));
console.log('Random No. Using random And Floor So That It Will Give Single Integer Output : ',Math.floor((Math.random()*10)+1));
// Random Chooses A Random No. B/w '0' To '1' 


