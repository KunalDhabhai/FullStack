console.log("---------------------------------08_Arrays'.js---------------------------------")
console.log("");

const Numbers = [1,2,3,4,5,6];
console.log('Numbers : ', Numbers);
const MyArray = new Array(3,6,9);
console.log('MyArray : ',MyArray);



console.log("");

console.log("                              Trying Different Functions Of Array                               ");
console.log("");
console.log('Length Of Array : ',MyArray.length);
MyArray.push(2);
MyArray.push(5);
console.log('After Pushing "2" & "5" In MyArray : ',MyArray);
console.log('Slicing Of MyArray : ',MyArray.slice(2,4));
console.log('MyArray After Slicing : ',MyArray);

console.log('Splicing Of MyArray : ',MyArray.splice(2,4));
console.log('MyArray After Splicing : ',MyArray);
// Splicing Remove Elements From Original Array Also From And Till The Range And It Includes Last Range No. ALso
// Whereas Slicing Only Shows Sliced Part , Not Make Any Chnges To Original Array And It Slices Till 'N-1' Range 
console.log('Index Of "5" In Array : ',MyArray.indexOf(5));
// Shows -1 Bcoz No. Is Not Present In Array
console.log('Pushing Element At The Very First Place In Array [Using "unshift" Function()]: ',MyArray.unshift(11));
console.log('MyArray After Using Join() : ' ,MyArray.join());
// Join Converts Array To String
console.log('Using "shift()" On Array : ',MyArray.shift());
// shift() Pop's Very First Element From The Array
console.log('Array After Using shift() : ',MyArray);

const NewArray =  new Array("hello" , "Heros");
console.log('NewArray : ',NewArray);
console.log('Merging Using concate() : ',MyArray.concat(NewArray));

// Concate() Adds Two Arrays'

const Combine = new Array(...MyArray,...NewArray);
console.log('Merging Using Spread Method : ',Combine);

// Spread Method Can Be Used To Add Two Or More Arrays'

const Integer = [1,2,3,4,5,[6,7,8],[9,10,[11,12]],13,14,15];
console.log('Simplifying Complex Array Using Flat() : ',Integer.flat(2));

// Flat Simplifies Array Having Multiple Arrays' In It Which Causes Complexity












