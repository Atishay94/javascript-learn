//  < , > , != , <=, >= , !== , == , === 

// const temprecture = 31
// if(temprecture != 40){
//     console.log("Temprecture are normal");
// }

// const balance = 1000
// if (balance ===1000) console.log(`Total bank balance ${balance}`),
// console.log(`this ${balance} balance is SBI bank balance`);

const userLoggedIn = true
const userDebit = true 
const loggedInGoogle= false
const loggedInEmail = true
const userSalary= 50000
if (userLoggedIn && userDebit) { // AND operator when all value are true or false  
    console.log("Allow to logging");
}
if (loggedInGoogle || loggedInEmail) { // OR operator when more than one value are true 
    console.log("user logged in");
}
if (userSalary >45000) {
    console.log("user salary is greater then 45000");
}