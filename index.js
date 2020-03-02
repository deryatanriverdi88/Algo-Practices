// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr){
    const newArray = arr.map(num => {
        return -num
    })
    return newArray
}

console.log(additiveInverse([-5, 7, -8, -3]))