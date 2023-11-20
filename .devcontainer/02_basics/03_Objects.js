//singleton object 
// const tinder = new Object()

// const tinder1 = {} // non-singleton object 
// console.log(tinder1);

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Chloe"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser = {
    email: "chloe234@gmail.com",
       userFullName:{
      fullname: {
           userFirstName: "Aanshika",
            userLastName: "Jain"
        }
    }
}
// console.log(regularUser.fullname.userFullName);  
// console.log(regularUser.fullname?.userFullName);  // ? => it means there are exist optional chaining 

const obj1= {1: 'a' , 2: 'b'}
const obj2= {3: 'c' , 4: 'd'}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({} , obj1, obj2) // with using empty array   

const obj3 = {...obj1, ...obj2} // using spread method
// console.log(obj3);

const  users = [
    {

    },
    {
        id: 21,
        name: "Mohan Judaro"
    },
    {
        id: 21,
        name: "Mohan Judaro"
    },
    {
        id: 21,
        name: "Mohan Judaro"
    },{

    },{

    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('isLoggedIn'));

const teacher = {
    teacherName:"Atishay Jain",
    selary:45000,
    teacherEmail:"atishayteacher@gmail.com"
}
// console.log(teacher.teacherEmail); // it's the normal way to print the value when we print the same value in multiple time it's more dificult
// now we see the destructuer of the objects

// const {teacherEmail} = teacher
// console.log(teacherEmail);  // or 

teacher.teacherEmail="bestteacher@gmail.com"

const {teacherEmail : tEmail} = teacher
console.log(tEmail);
