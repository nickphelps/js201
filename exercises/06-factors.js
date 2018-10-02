// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
function factors(factorNumber) {
    var i = 0
    var myFactorArray = []

    for (i = 0; i <= factorNumber; i++) {
        if (factorNumber % i == 0) {
            myFactorArray.push(i)
            //console.log(myFactorArray)
        }
    }
    console.log(myFactorArray)
    return myFactorArray
}
factors(96)