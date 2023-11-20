
const programming = ["js", "java", "rb", "pythan", "cpp","react"]

programming.forEach( (item) => {
    // console.log(item);
    // return item
})

let value = [1,2,3,4,5,6,7,8,9,10]
 
// const myNum= value.filter( (item) => item > 4)
    // console.log(myNum);
const myNum= value.filter( (item) => {
    // item > 4
    // return item > 4 //when use scope {} then must be write return keyword 
})

// const newNums =[]
// value.forEach((num)  => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
//     console.log(newNums);
 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myBooks = books.filter( (bks) => bks.genre === 'Science')

//   console.log(myBooks);


// when we use call back function ( () => {} ) ----> in this function we use scope 
  // in this scope must we use return keyword for display the value

//   myBooks = books.filter( (bks) => {
//     return bks.publish >= 2006
//   })
  myBooks = books.filter( (bks) => {
    return bks.publish >= 2006 && bks.genre === "Science"
  })

  console.log(myBooks);