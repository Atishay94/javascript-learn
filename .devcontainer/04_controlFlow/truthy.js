// falsy value
// false , 0, -0, BigInt 0n , "" ,null , undefined , Nan(not an number)

// truthy value
// "0" , 'false', [] , " ", function(){}, 

const userAttendence = []
if (userAttendence.length===0) {
    console.log(`Array is empty ${userAttendence}`);
}

const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log(`object is empty ${emptyObj}`);
    
}
// ----------------------------------------------------------
// Nullish Coalescing operator (??) :-- null and undefined

let var1;
// var1 = 5 ?? 10
// var1 = null ?? 10
var1 = undefined ?? 25



console.log(var1);
// ------------------------------------------

// ---- Terniary Operator

// condetion ? true : false
const salary =1200;
salary<=1500 ? console.log("user salary less than 1500") : console.log("user salary greater than 1500");