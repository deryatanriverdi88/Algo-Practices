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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION - 3
// Create a function that takes a string and return a string with its letters in alphabethical order.

function AlphabetSoup(str) {
    return str.split("").sort().join("")
}

console.log(AlphabetSoup("hello"))
console.log(AlphabetSoup("javascript"))

//returns => ehllo
//        => aacijprstv

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION - 6
// Given an object containing the cost price per unit, sell price per unit, and the starting inventory. Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has been sold.

function profit(info){
  
  const costPrice = Object.values(info)[0]
  const sellPrice = Object.values(info)[1]
  const inventory = Object.values(info)[2]
  // The Object.values() method returns an array of a given object's own enumerable property values
  // return of Object.values(info) => [32.67, 45, 1200]

  return Math.round((sellPrice - costPrice) * inventory)
   // The Math.round() function returns the value of a number rounded to the nearest integer.
}

console.log(profit({
    costPrice: 32.67, 
    sellPrice: 45.00,
    inventory: 1200
}))

// returns => 14796

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION - 7
// Write a function that returns true if two rooks can attack each other, and false otherwise
// Two rooks can attack each other if they share the same row (letter) or column (number)

function canCapture([yourRook, opponentsRook]){
    let firstChar = opponentsRook.split("")[0]
    let secondChar = opponentsRook.split("")[1]
    if (yourRook.includes(firstChar) || yourRook.includes(secondChar)){
        return true
    } else {
        return false
    }
}

console.log(canCapture([ "A8" ,  "E8"]))
console.log(canCapture([ "A1" ,  "B2"]))

// returns => true
//         => false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION - 8
// write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(factors, num){
  const isTrue = factors.filter(n => {
      return num % n === 0
      // filter method will return a new array with objects that passed the condition
  })
  if(isTrue.length === factors.length){
      // if the new array that is created by filter method has a same length as orginal array, that means every object in orginal array passes the condition.
      return true
  } else {
      return false
  }
}

console.log(checkFactors([2,3,4], 12))
console.log(checkFactors([1,2,3,8], 12))

// returns => true
//         => false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION - 8
// Create a functtion that takes two strings  and returns true if the first string ends width the second string; otherwise return false.

function checkEnding(str1, str2){
    if(str1.endsWith(str2)){
        // The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
        return true
    } else {
        return false
    }
}

console.log(checkEnding("abc", "bc"))
console.log(checkEnding("samurai", "zi"))
console.log(checkEnding("feminine", "nine"))

// returns => true
//         => false
//         => true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

