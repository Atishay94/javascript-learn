// for of

// ["","",""] normal array
// [{},{},{}] object array

let arr = [1,3,5,7,9]
for (const val of arr) {
    // console.log(val);
}

const userName = "Atishay jain"
for (const name of userName) {
    // console.log(`value is ${name}`)
    
}

// -------------------------------------------------
// Maps 
// map knowns for no store duplicate value in it 
const map = new Map()
map.set('IN', "India")
map.set('BAN', "Bangladesh")
map.set('FR', "France")
map.set('US', "United State")
map.set("IN", "India")

//console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key, values] of map) {
    // console.log(key, ':-', values);
}

const myObject={  // object are not iterable
    one:"IronMan",
    two: "flash",
    three: "batMan" 
}
// for (const [key,value] of myObject) {
//     console.log(key, ":-", value);
// }