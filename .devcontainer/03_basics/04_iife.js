// Immediately Invoked Function Expressions IIFE 

// function morning(){
//     console.log("Good morning Guy's");
// }
(function morning(){
    console.log(`Good morning Guy's`);
})();

// ()();

// morning()

// what is IIFE 
// jo function immediately execute ho jaye or 
// -> global scope ke palution se problem hoti ha kai bar to us global scope ke jo bhi veriable 
// or jo bhi declare unke palution ho hatane ke liye ham IFFE ka use karte hai

// using Array
( function noon(){
   //its named iffe  
    console.log(`Good After noon`);
} )();
( (name)=>{
    // unnamed iffe 
    console.log(`Good Evening ${name}`);
} )("Evening time");

()=>{}