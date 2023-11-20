const user={
    username: "Atishay",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.username}, is logged in`)
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage();
// console.log(this);

// const doodh = function(){
//     let username= "Atishay drink a glass 0f milk"
//     console.log(this.username); //when we use this keyword in the same scope its showing undefined
// }


const doodh = () => {
    let username= "Atishay drink a glass 0f milk"
    // console.log(this);
}

// doodh()

// const addTwo = (num1, num2)=>{ // explicit return 
//     return num1+ num2
// }
// const addTwo = (num1, num2) => (num1+ num2) // implicit return

const addTwo = (num1, num2) => ({username: "Sikander"}) //return objects    

console.log(addTwo(2,8)); 