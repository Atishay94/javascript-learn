// block scope
// global scope     

// let c=90
if (true) {
    let a=10
    const b=20
    var c=0
    // console.log("inner ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const name="Arish"

    function two(){
        const website = "Youtube with google"

        console.log(name);
    }
    // console.log(website);
    two()
}   
// one()

if (true) {
    const name ="Atishay"
    if (name ==="Atishay") {
        const website="youtube"
        console.log(name + website);
    }
    // console.log(website);
    if (!name) {
        console.log("second comperision condition true");
    }
    
}
// console.log(name);
// -----------------intresting-----------------------------------
console.log(addOne(5))
function addOne(num){
    return num +1
}
// addOne(5)
// addTwo(5)
const addTwo= function(num1){
    return + 2
}
console.log(addTwo(5))