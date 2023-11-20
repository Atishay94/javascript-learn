const myNumbers =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => { return num + 10})

// console.log(newNums);

const newNumbers = []

myNumbers.forEach( (nums) =>{
    newNumbers.push(nums+5)
})

// console.log(newNumbers);

const newFilter = myNumbers.filter( (item) => { return item >= 6 }) //jo true hoga wahi pass hoga
// console.log(newFilter);

// ------------------------------------
// channing

const newNum = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num)  => num >=35)
    console.log(newNum);
