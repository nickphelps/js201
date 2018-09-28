// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
function numberJoinerWhile (start, end) {


    var myString = ''
    var i = start
    if (end == 1 && start == 1) {
        myString = "1"
        return myString
    } else {
        while (i <= end && i >= start) {  
            if (i == end) {
                myString = myString + i
                break
            }//if 
                myString = myString + i + '_'
                i = i + 1
        }//while
    }//else
    return myString
    
}//function

console.log( numberJoinerWhile(10,14) )



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

function numberJoinerFor (start, end) { 
    var myString = ''
    var i = start
    if (end == 1 && start == 1) {
        myString = "1"
        return myString
    } else {
        for (i = start; i <= end; i++) {  
            if (i == end) {
                myString += i
                break
            }//if 
                myString += i + '_' 
        }//for
    }//else
    return myString
}

numberJoinerFor(1,10)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy (start, end, separator) {
    var myString = ''
    var i = start

    if (separator == null) {
        
        if (end == 1 && start == 1) {
            myString = "1"
            return myString
        } else {
            while (i <= end && i >= start) {  
                if (i == end) {
                    myString += i
                    break
                }//if 
                    myString += i + '_'
                    i++
            }//while
        }//else
        return myString
    } else {
     if (end == 1 && start == 1) {
        myString = "1"
        return myString
    } else {
        while (i <= end && i >= start) {  
            if (i == end) {
                myString += i
                break
            }//if 
                myString += i + separator
                i++
        }//while
    }//else
    console.log(myString)
    return myString
}//else
}//function
 
numberJoinerFancy(1, 10)  