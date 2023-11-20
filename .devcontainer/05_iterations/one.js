// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`best number is ${element}`);
    }
    // console.log(element);
    
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop ${j}`);
        
//     }
    
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + '*' + j + '=' + i*j); 
    } 
}

const myArray=["Superman, flash, batman"]
for (let i = 0; i < myArray.length; i++) {
     const element = myArray[i];
    //  console.log(element);
    
}
// const myArray=["Superman, flash, batman"]
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log("Detected value 5");
        break
    } 
    // console.log(`value of i is ${i}`);   
}
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        //cted value 5");
        continue
    } 
    // console.log(`value of i is ${i}`);   
}
// N3717019243