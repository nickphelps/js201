// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare(n) {
    if (n === 0) {
        return ''
    }
    var topLine = '*'
    //making the topline
    for (var i = 1; i < n; i++) {
        topLine = topLine + '*'
    }//topline for

    var mySquare = topLine

    for (i = 1; i < n; i++) {
        mySquare += '\n' + topLine
    }
    return mySquare
}
makeSquare(4)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******
function makeBox (length, width) {
    if (length === 0 && width === 0) {
        return ''
    }

    if (length === 1 && width === 1) {
        return '*'
    }

    if (length === 2 && width === 1) {
        return '**' 
    }

    var topLine = '*'

    //making the topline
    for (var len = 1; len < length; len++) {
        topLine += '*'
    }
    var middleLines = ''

    var emptySpace = ''

    //making the empty spaces
    for (var y = 0; y < (length - 2); y++) { //how many middle lines are shown
        emptySpace = emptySpace + ' ' 
    }//middle spaces

    //making the sides lines
    for (var i = 2; i < width; i++) { //how many lines go down
        middleLines += '*' + emptySpace + '*' + '\n'
    }//for total middle lines
    var mySquare = topLine + '\n' + middleLines + topLine
    return mySquare
}
makeBox(2, 1)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
function makeBanner(myBannner) {

    var ask = '*'
    var topLine = ''
    var middleLine = ''
    var bottomLine = ''

    topLine += '****' + ask.repeat(myBannner.length) 
    middleLine += '* ' + myBannner + ' *'
    bottomLine += '****' + ask.repeat(myBannner.length) 

    var myCompleteString = topLine + '\n' + middleLine + '\n' + bottomLine

    return myCompleteString

}
console.log( makeBanner(''))