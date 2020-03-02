// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr){
    const newArray = arr.map(num => {
        return -num
    })
    return newArray
}

console.log(additiveInverse([-5, 7, -8, -3]))


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