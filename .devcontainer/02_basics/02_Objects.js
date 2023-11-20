// Singleton  => when the array are create using literals

// object literals

 const mySym11 =Symbol("key1")
 const mySym12 =Symbol("key2")

const   jsUser = {
    name: "Atishay jain",
    age: 18,
    location: "Pune",
    "contactN0": 8798773098,
    email: "atishay23@gmail.com",
    isLogged: false,
    lastLogin: ["Monday", "Thrusday"],
    mySym11: "KEY1" ,//AS A STRING 
    [mySym12] : "KEY2" // as a symbol data type

}

// console.log(jsUser.email);

// console.log(jsUser["name"]);  //standard type to print the objects values

// console.log(jsUser["name"]);
// console.log(jsUser["name"]);


//console.log(typeof(jsUser.mySym11));
//console.log(jsUser["mySym12"]);

jsUser.email = "atishaygoogle.com"// udate email value

//Object.freeze(jsUser)  // when it is use then the all objects values are freeze or not to be change
jsUser.name = "ATISHAY JAIN"  // change the name 
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user")
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`) // convert string into backticks This is called interpulation
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
