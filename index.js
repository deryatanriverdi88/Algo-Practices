// FUNCTION - 1
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr){
    const newArray = arr.map(num => {
        return -num
    })
    return newArray
}

console.log(additiveInverse([-5, 7, -8, -3]))

// returns => [5, -7, 8, 3]


// FUNCTION - 2
// Create a function that takes in year and months as input, then return what yeasr it would be after n-months has elapsed
// Assume that aading 12 months will always increment the years by 1.
// If no value is given for yeaar or months, return "years missing" or " month missing".
// At least one value will be present. 

function afterNMonths(year, months){
   if (year === undefined){
       return "Year missing"
   } else if( months === undefined) {
       return "Month missing"
   }else if(Number.isInteger(year) && Number.isInteger(months)){
       // Number.isInteger() checks if the object is a number or not.
       let addedMonths = months / 12
       addedMonths = Math.trunc(addedMonths)
       // The Math.trunc() function returns the integer part of a number by removing any fractional digits.
       return year + addedMonths
   }
}

console.log(afterNMonths(2009, 24))

// returns => 2011


// FUNCTION - 3
// Create a function that takes a string and return a string with its letters in alphabethical order.

function AlphabetSoup(str) {
    return str.split("").sort().join("")
}

console.log(AlphabetSoup("hello"))
console.log(AlphabetSoup("javascript"))

//returns => ehllo
//        => aacijprstv


// FUNCTION - 4
// Write a method that checks if two numbers are: 
//     - Smaller than 0
//     - Greater than 0 
//     - Exactly 0

function both (n1, n2) {
    if(n1 > 0 & n2 > 0 || n1 < 0 & n2 < 0  || n1 === 0 & n2 === 0 ){
        return true
    }else {
        return false
    }
}

console.log(both(6,2))
console.log(both(6,-2))

// returns => true
//         => false


// FUNCTION - 5
// Create a function to calculate the determinant of 2 x 2 matrix. The determinant of the following matrix is: ad - bc : 
// [[a,b], [c,d]]

function calcDeterminant(matrix){
    let a = matrix[0][0]
    let b = matrix[0][1]
    let c = matrix[1][0]
    let d = matrix[1][1]
    return (a * d) - (b * c)
}

console.log(calcDeterminant( [ [1,2], [3,4] ]) )
console.log(calcDeterminant( [ [5,3], [3, 1] ]) )

// returns => -2 
//         => -4

