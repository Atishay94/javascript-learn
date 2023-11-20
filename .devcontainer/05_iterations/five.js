// for each loop
    // () => {} call back function
    const programming = ["js", "java", "rb", "pythan", "cpp","react"]

    programming.forEach( function(value) {
        // console.log(value);
    } )
    
    programming.forEach( (item) => { 
        // console.log(item); 
    })
    
    function printMe(same) {
        // console.log(same);
    }
    programming.forEach(printMe)
    
    programming.forEach( (item1, index, arr, ) => {
        // console.log(item1, index, arr);
    })
    
    const coding = [
        {
            languageName: "Java script",
            languageFileName: "js"
        },
        {
            languageName: "Java",
            languageFileName: "java"
        },
        {
            languageName: "Python",
            languageFileName: "py"
        }
    ]
    coding.forEach( (myCoding) => {
        console.log(myCoding.languageName);
    })